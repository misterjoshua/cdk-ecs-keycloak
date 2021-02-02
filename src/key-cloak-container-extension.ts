import * as ecs from '@aws-cdk/aws-ecs';
import * as logs from '@aws-cdk/aws-logs';
import * as secretsmanager from '@aws-cdk/aws-secretsmanager';
import * as cloudmap from '@aws-cdk/aws-servicediscovery';
import * as cdk from '@aws-cdk/core';

export enum KeyCloakDatabaseVendor {
  H2 = 'h2',
  POSTGRES = 'postgres',
  MYSQL = 'mysql',
  MARIADB = 'mariadb',
  ORACLE = 'oracle',
  MSSQL = 'mssql',
}

export interface KeyCloakContainerExtensionProps {
  /**
   * @default 'keycloak'
   */
  readonly containerName?: string;

  /**
   * The default number of distributed cache owners for each key.
   * @default 1
   */
  readonly cacheOwnersCount?: number;

  /**
   * The number of distributed cache owners for authentication sessions.
   * @default - same as `cacheOwnersCount`
   */
  readonly cacheOwnersAuthSessionsCount?: number;

  /**
   * @default - none
   */
  readonly databaseCredentials?: secretsmanager.ISecret;

  /**
   * Database name
   * @default 'keycloak'
   */
  readonly databaseName?: string;

  /**
   * @default KeyCloakDatabaseVendor.MARIADB
   */
  readonly databaseVendor?: KeyCloakDatabaseVendor;

  /**
   * Default admin user. This user is created in the master realm if it doesn't exist.
   * @default 'admin'
   */
  readonly defaultAdminUser?: string;

  /**
   * Default admin user's password. This password is applied when the default admin user
   * is created.
   * @default 'admin'
   */
  readonly defaultAdminPassword?: string;
}

/**
 * Extends a task definition by adding a keycloak container to it. To cluster
 * your KeyCloak servers, you need to enable service discovery and you must
 * call KeyCloakContainerExtension.useService(service) with the ECS service
 * so that we can configure the correct DNS query.
 */
export class KeyCloakContainerExtension implements ecs.ITaskDefinitionExtension {
  /**
   * Name of the container added to the task definition.
   */
  public readonly containerName: string;

  /**
   * Name of the Keycloak database.
   */
  public readonly databaseName: string;

  /**
   * Database vendor name.
   */
  public readonly databaseVendor: string;

  /**
   * The number of distributed cache owners for each key.
   */
  public readonly cacheOwnersCount: number;

  /**
   * The number of distributed auth session cache owners for each key.
   */
  public readonly cacheOwnersAuthSessionsCount: number;

  private readonly databaseCredentials?: secretsmanager.ISecret;
  private readonly defaultAdminPassword: string;
  private readonly defaultAdminUser: string;
  private cloudMapService?: cloudmap.IService;

  constructor(props?: KeyCloakContainerExtensionProps) {
    this.cacheOwnersCount = props?.cacheOwnersCount ?? 1;
    this.cacheOwnersAuthSessionsCount = props?.cacheOwnersAuthSessionsCount ?? this.cacheOwnersCount;

    this.containerName = props?.containerName ?? 'keycloak';
    this.databaseVendor = props?.databaseVendor ?? KeyCloakDatabaseVendor.H2;
    this.databaseName = props?.databaseName ?? 'keycloak';
    this.databaseCredentials = props?.databaseCredentials;
    this.defaultAdminUser = props?.defaultAdminUser ?? 'admin';
    this.defaultAdminPassword = props?.defaultAdminPassword ?? 'admin';

    if (!this.databaseCredentials && this.databaseVendor !== KeyCloakDatabaseVendor.H2) {
      throw new Error(`The ${this.databaseVendor} database vendor requires credentials`);
    }
  }

  /**
   * Inform Keycloak of a CloudMap service discovery mechanism.
   */
  useCloudMapService(serviceDiscovery: cloudmap.IService) {
    this.cloudMapService = serviceDiscovery;
  }

  // Works for fargate and ec2 task definitions in general.
  extend(taskDefinition: ecs.TaskDefinition): void {
    const keycloakSecrets: Record<string, ecs.Secret> = {};

    const databaseNameForVendor = this.databaseVendor != KeyCloakDatabaseVendor.H2 ? this.databaseName : '';

    if (this.databaseCredentials) {
      keycloakSecrets.DB_ADDR = ecs.Secret.fromSecretsManager(this.databaseCredentials, 'host');
      keycloakSecrets.DB_PORT = ecs.Secret.fromSecretsManager(this.databaseCredentials, 'port');
      keycloakSecrets.DB_USER = ecs.Secret.fromSecretsManager(this.databaseCredentials, 'username');
      keycloakSecrets.DB_PASSWORD = ecs.Secret.fromSecretsManager(this.databaseCredentials, 'password');
    }

    const keycloak = taskDefinition.addContainer(this.containerName, {
      image: ecs.ContainerImage.fromRegistry('jboss/keycloak'),
      environment: {
        KEYCLOAK_USER: this.defaultAdminUser,
        KEYCLOAK_PASSWORD: this.defaultAdminPassword,
        DB_VENDOR: this.databaseVendor,
        DB_NAME: databaseNameForVendor,
        JGROUPS_DISCOVERY_PROTOCOL: cdk.Lazy.string({
          produce: () => this._getJGroupsDiscoveryProtocol(),
        }),
        JGROUPS_DISCOVERY_PROPERTIES: cdk.Lazy.string({
          produce: () => this._getJGroupsDiscoveryProperties(),
        }),
        // keycloak uses a distributed cache by default and only stores cache
        // keys on one node. I'm using count 2 here to increase the durability
        // of the caches so that users aren't losing their auth sessions as
        // often while ECS is moving tasks around or relaunching tasks on
        // fargate spot tasks.
        CACHE_OWNERS_COUNT: this.cacheOwnersCount.toString(),
        CACHE_OWNERS_AUTH_SESSIONS_COUNT: this.cacheOwnersAuthSessionsCount.toString(),
      },
      secrets: keycloakSecrets,
      logging: ecs.LogDriver.awsLogs({
        streamPrefix: '/cdk-ecs-keycloak',
        logRetention: logs.RetentionDays.ONE_MONTH,
      }),
    });

    keycloak.addPortMappings({ containerPort: 8080 });
    keycloak.addPortMappings({ containerPort: 7600 });
  }

  /**
   * @internal
   */
  public _getJGroupsDiscoveryProtocol() {
    if (!this.cloudMapService) {
      return 'JDBC_PING';
    } else {
      return 'dns.DNS_PING';
    }
  }

  /**
   * @internal
   */
  public _getJGroupsDiscoveryProperties() {
    if (!this.cloudMapService) {
      return '';
    }

    return cdk.Fn.sub('dns_query=${ServiceName}.${ServiceNamespace},dns_record_type=${QueryType}', {
      ServiceName: this.cloudMapService.serviceName,
      ServiceNamespace: this.cloudMapService.namespace.namespaceName,
      QueryType: mapDnsRecordTypeToJGroup(this.cloudMapService.dnsRecordType),
    });
  }
}

export function mapDnsRecordTypeToJGroup(dnsRecordType: cloudmap.DnsRecordType): string {
  switch (dnsRecordType) {
    case cloudmap.DnsRecordType.A: return 'A';
    case cloudmap.DnsRecordType.SRV: return 'SRV';
    default:
      throw new Error(`Unsupported service discovery record type: ${dnsRecordType}`);
  }
}