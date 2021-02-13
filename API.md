# API Reference

**Classes**

Name|Description
----|-----------
[CloudMapNamespaceProvider](#wheatstalk-cdk-ecs-keycloak-cloudmapnamespaceprovider)|A convenience interface for creating a CloudMap namespace.
[ClusterProvider](#wheatstalk-cdk-ecs-keycloak-clusterprovider)|Convenience interface for providing ClusterInfo to the cluster construct.
[DatabaseInstanceProvider](#wheatstalk-cdk-ecs-keycloak-databaseinstanceprovider)|Provides a very basic RDS database instance.
[DatabaseProvider](#wheatstalk-cdk-ecs-keycloak-databaseprovider)|Convenience interface for providing DatabaseInfo to the cluster.
[EcsClusterInfoProvider](#wheatstalk-cdk-ecs-keycloak-ecsclusterinfoprovider)|Provides a very basic ECS cluster in the given VPC.
[EnsureMysqlDatabaseExtension](#wheatstalk-cdk-ecs-keycloak-ensuremysqldatabaseextension)|Ensures a MySQL database exists by adding an init container.
[HttpListenerProvider](#wheatstalk-cdk-ecs-keycloak-httplistenerprovider)|Creates a load balancer and an HTTP load balancer.
[HttpsListenerProvider](#wheatstalk-cdk-ecs-keycloak-httpslistenerprovider)|Creates an application load balancer and an HTTPS listener with the given ACM certificates.
[IngressAndPrivateVpcProvider](#wheatstalk-cdk-ecs-keycloak-ingressandprivatevpcprovider)|Provides a VPC with both private and public subnets.
[KeycloakCluster](#wheatstalk-cdk-ecs-keycloak-keycloakcluster)|A complete Keycloak cluster in a box.
[KeycloakContainerExtension](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextension)|Adds a keycloak container to a task definition.
[KeycloakEc2TaskDefinition](#wheatstalk-cdk-ecs-keycloak-keycloakec2taskdefinition)|The details of a Keycloak task definition running on EC2.
[KeycloakFargateTaskDefinition](#wheatstalk-cdk-ecs-keycloak-keycloakfargatetaskdefinition)|The details of a Keycloak task definition running on Fargate.
[ListenerProvider](#wheatstalk-cdk-ecs-keycloak-listenerprovider)|Convenience interface for providing ListenerInfo to the cluster.
[ServerlessAuroraDatabaseProvider](#wheatstalk-cdk-ecs-keycloak-serverlessauroradatabaseprovider)|Provides a serverless Aurora database cluster.
[VpcProvider](#wheatstalk-cdk-ecs-keycloak-vpcprovider)|*No description*


**Structs**

Name|Description
----|-----------
[ClusterInfo](#wheatstalk-cdk-ecs-keycloak-clusterinfo)|Information about the ecs cluster.
[DatabaseInfo](#wheatstalk-cdk-ecs-keycloak-databaseinfo)|Information about needed to connect to the database.
[DatabaseInstanceProviderProps](#wheatstalk-cdk-ecs-keycloak-databaseinstanceproviderprops)|Basic props for creating a database instance.
[EnsureMysqlDatabaseExtensionProps](#wheatstalk-cdk-ecs-keycloak-ensuremysqldatabaseextensionprops)|Props for EnsureMysqlDatabaseExtension.
[HttpsListenerProviderProps](#wheatstalk-cdk-ecs-keycloak-httpslistenerproviderprops)|Properties for a new HTTPS-listening load balancer.
[KeycloakClusterProps](#wheatstalk-cdk-ecs-keycloak-keycloakclusterprops)|Props for `KeycloakCluster`.
[KeycloakContainerExtensionProps](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextensionprops)|Configuration for the Keycloak container.
[KeycloakEc2TaskDefinitionProps](#wheatstalk-cdk-ecs-keycloak-keycloakec2taskdefinitionprops)|Props for `KeycloakEc2TaskDefinition`.
[KeycloakFargateTaskDefinitionProps](#wheatstalk-cdk-ecs-keycloak-keycloakfargatetaskdefinitionprops)|Props for `KeycloakFargateTaskDefinition`.
[ListenerInfo](#wheatstalk-cdk-ecs-keycloak-listenerinfo)|Information about how to register with a load balancer.
[PrivateDnsNamespaceProviderProps](#wheatstalk-cdk-ecs-keycloak-privatednsnamespaceproviderprops)|Props for creating a private Dns Namespace.
[ServerlessAuroraDatabaseProviderProps](#wheatstalk-cdk-ecs-keycloak-serverlessauroradatabaseproviderprops)|Basic props for creating a serverless Aurora database cluster.
[VpcInfo](#wheatstalk-cdk-ecs-keycloak-vpcinfo)|Information about the VPC other providers may opt to privde their resources in.


**Interfaces**

Name|Description
----|-----------
[ICloudMapNamespaceInfoProvider](#wheatstalk-cdk-ecs-keycloak-icloudmapnamespaceinfoprovider)|Provides CloudMapNamespaceInfo once the VPC is available.
[IClusterInfoProvider](#wheatstalk-cdk-ecs-keycloak-iclusterinfoprovider)|Provides ClusterInfo after the VPC is available.
[IDatabaseInfoProvider](#wheatstalk-cdk-ecs-keycloak-idatabaseinfoprovider)|Provides DatabaseInfo after the VPC is available.
[IKeycloakTaskDefinition](#wheatstalk-cdk-ecs-keycloak-ikeycloaktaskdefinition)|A Keycloak task definition.
[IListenerInfoProvider](#wheatstalk-cdk-ecs-keycloak-ilistenerinfoprovider)|Provides ListenerInfo once the VPC is available.
[IVpcInfoProvider](#wheatstalk-cdk-ecs-keycloak-ivpcinfoprovider)|Provides VpcInfo.


**Enums**

Name|Description
----|-----------
[KeycloakDatabaseVendor](#wheatstalk-cdk-ecs-keycloak-keycloakdatabasevendor)|The database vendor.



## class CloudMapNamespaceProvider  <a id="wheatstalk-cdk-ecs-keycloak-cloudmapnamespaceprovider"></a>

A convenience interface for creating a CloudMap namespace.


### Initializer




```ts
new CloudMapNamespaceProvider()
```



### Methods


#### *static* privateDns(props?) <a id="wheatstalk-cdk-ecs-keycloak-cloudmapnamespaceprovider-privatedns"></a>

Create a CloudMap namespaces from a private dns zone.

```ts
static privateDns(props?: PrivateDnsNamespaceProviderProps): ICloudMapNamespaceInfoProvider
```

* **props** (<code>[PrivateDnsNamespaceProviderProps](#wheatstalk-cdk-ecs-keycloak-privatednsnamespaceproviderprops)</code>)  *No description*
  * **name** (<code>string</code>)  The globally unique name for the namespace. __*Default*__: 'keycloak-service-discovery'

__Returns__:
* <code>[ICloudMapNamespaceInfoProvider](#wheatstalk-cdk-ecs-keycloak-icloudmapnamespaceinfoprovider)</code>



## class ClusterProvider  <a id="wheatstalk-cdk-ecs-keycloak-clusterprovider"></a>

Convenience interface for providing ClusterInfo to the cluster construct.


### Initializer




```ts
new ClusterProvider()
```



### Methods


#### *static* cluster() <a id="wheatstalk-cdk-ecs-keycloak-clusterprovider-cluster"></a>

Create an ECS cluster.

```ts
static cluster(): IClusterInfoProvider
```


__Returns__:
* <code>[IClusterInfoProvider](#wheatstalk-cdk-ecs-keycloak-iclusterinfoprovider)</code>

#### *static* fromClusterInfo(clusterInfo) <a id="wheatstalk-cdk-ecs-keycloak-clusterprovider-fromclusterinfo"></a>

Provide raw clusterInfo.

```ts
static fromClusterInfo(clusterInfo: ClusterInfo): IClusterInfoProvider
```

* **clusterInfo** (<code>[ClusterInfo](#wheatstalk-cdk-ecs-keycloak-clusterinfo)</code>)  *No description*
  * **cluster** (<code>[ICluster](#aws-cdk-aws-ecs-icluster)</code>)  The ECS cluster for adding a service. 

__Returns__:
* <code>[IClusterInfoProvider](#wheatstalk-cdk-ecs-keycloak-iclusterinfoprovider)</code>



## class DatabaseInstanceProvider  <a id="wheatstalk-cdk-ecs-keycloak-databaseinstanceprovider"></a>

Provides a very basic RDS database instance.

__Implements__: [IDatabaseInfoProvider](#wheatstalk-cdk-ecs-keycloak-idatabaseinfoprovider)

### Initializer




```ts
new DatabaseInstanceProvider(props?: DatabaseInstanceProviderProps)
```

* **props** (<code>[DatabaseInstanceProviderProps](#wheatstalk-cdk-ecs-keycloak-databaseinstanceproviderprops)</code>)  *No description*
  * **engine** (<code>[IInstanceEngine](#aws-cdk-aws-rds-iinstanceengine)</code>)  Instance database engine. __*Default*__: mysql 8.0
  * **instanceType** (<code>[InstanceType](#aws-cdk-aws-ec2-instancetype)</code>)  Instance type. __*Default*__: t2.micro
  * **subnets** (<code>[SubnetSelection](#aws-cdk-aws-ec2-subnetselection)</code>)  Select subnets to register the database instance in. __*Optional*__




## class DatabaseProvider  <a id="wheatstalk-cdk-ecs-keycloak-databaseprovider"></a>

Convenience interface for providing DatabaseInfo to the cluster.


### Initializer




```ts
new DatabaseProvider()
```



### Methods


#### *static* databaseInstance(props?) <a id="wheatstalk-cdk-ecs-keycloak-databaseprovider-databaseinstance"></a>

Provide a new database instance.

```ts
static databaseInstance(props?: DatabaseInstanceProviderProps): DatabaseInstanceProvider
```

* **props** (<code>[DatabaseInstanceProviderProps](#wheatstalk-cdk-ecs-keycloak-databaseinstanceproviderprops)</code>)  *No description*
  * **engine** (<code>[IInstanceEngine](#aws-cdk-aws-rds-iinstanceengine)</code>)  Instance database engine. __*Default*__: mysql 8.0
  * **instanceType** (<code>[InstanceType](#aws-cdk-aws-ec2-instancetype)</code>)  Instance type. __*Default*__: t2.micro
  * **subnets** (<code>[SubnetSelection](#aws-cdk-aws-ec2-subnetselection)</code>)  Select subnets to register the database instance in. __*Optional*__

__Returns__:
* <code>[DatabaseInstanceProvider](#wheatstalk-cdk-ecs-keycloak-databaseinstanceprovider)</code>

#### *static* fromDatabaseInfo(props) <a id="wheatstalk-cdk-ecs-keycloak-databaseprovider-fromdatabaseinfo"></a>

Provide raw DatabaseInfo.

```ts
static fromDatabaseInfo(props: DatabaseInfo): IDatabaseInfoProvider
```

* **props** (<code>[DatabaseInfo](#wheatstalk-cdk-ecs-keycloak-databaseinfo)</code>)  *No description*
  * **credentials** (<code>[ISecret](#aws-cdk-aws-secretsmanager-isecret)</code>)  Database credentials in standard RDS json format. 
  * **vendor** (<code>[KeycloakDatabaseVendor](#wheatstalk-cdk-ecs-keycloak-keycloakdatabasevendor)</code>)  Database vendor. 
  * **connectable** (<code>[IConnectable](#aws-cdk-aws-ec2-iconnectable)</code>)  A connectable so that the cluster can allow itself to connect to the database. __*Optional*__

__Returns__:
* <code>[IDatabaseInfoProvider](#wheatstalk-cdk-ecs-keycloak-idatabaseinfoprovider)</code>

#### *static* serverlessAuroraCluster(props?) <a id="wheatstalk-cdk-ecs-keycloak-databaseprovider-serverlessauroracluster"></a>

Provide a new serverless aurora cluster.

```ts
static serverlessAuroraCluster(props?: ServerlessAuroraDatabaseProviderProps): IDatabaseInfoProvider
```

* **props** (<code>[ServerlessAuroraDatabaseProviderProps](#wheatstalk-cdk-ecs-keycloak-serverlessauroradatabaseproviderprops)</code>)  *No description*
  * **engine** (<code>[IClusterEngine](#aws-cdk-aws-rds-iclusterengine)</code>)  Cluster engine. __*Default*__: rds.DatabaseClusterEngine.AURORA_MYSQL
  * **scaling** (<code>[ServerlessScalingOptions](#aws-cdk-aws-rds-serverlessscalingoptions)</code>)  Scaling options. __*Default*__: 5 minute auto pause, min and max capacity of 1 acu.
  * **subnets** (<code>[SubnetSelection](#aws-cdk-aws-ec2-subnetselection)</code>)  Select subnets to register the database cluster in. __*Optional*__

__Returns__:
* <code>[IDatabaseInfoProvider](#wheatstalk-cdk-ecs-keycloak-idatabaseinfoprovider)</code>



## class EcsClusterInfoProvider  <a id="wheatstalk-cdk-ecs-keycloak-ecsclusterinfoprovider"></a>

Provides a very basic ECS cluster in the given VPC.

__Implements__: [IClusterInfoProvider](#wheatstalk-cdk-ecs-keycloak-iclusterinfoprovider)

### Initializer




```ts
new EcsClusterInfoProvider()
```





## class EnsureMysqlDatabaseExtension  <a id="wheatstalk-cdk-ecs-keycloak-ensuremysqldatabaseextension"></a>

Ensures a MySQL database exists by adding an init container.

Makes the default container
depend on the successful completion of this container.

__Implements__: [ITaskDefinitionExtension](#aws-cdk-aws-ecs-itaskdefinitionextension)

### Initializer




```ts
new EnsureMysqlDatabaseExtension(props: EnsureMysqlDatabaseExtensionProps)
```

* **props** (<code>[EnsureMysqlDatabaseExtensionProps](#wheatstalk-cdk-ecs-keycloak-ensuremysqldatabaseextensionprops)</code>)  *No description*
  * **databaseCredentials** (<code>[ISecret](#aws-cdk-aws-secretsmanager-isecret)</code>)  RDS credentials. 
  * **databaseName** (<code>string</code>)  Name of the database to create. 
  * **containerName** (<code>string</code>)  Name of the container to add to do this work. __*Default*__: 'ensure-mysql-database'
  * **logging** (<code>[LogDriver](#aws-cdk-aws-ecs-logdriver)</code>)  Logging driver. __*Optional*__


### Methods


#### extend(taskDefinition) <a id="wheatstalk-cdk-ecs-keycloak-ensuremysqldatabaseextension-extend"></a>

Apply the extension to the given TaskDefinition.

```ts
extend(taskDefinition: TaskDefinition): void
```

* **taskDefinition** (<code>[TaskDefinition](#aws-cdk-aws-ecs-taskdefinition)</code>)  *No description*






## class HttpListenerProvider  <a id="wheatstalk-cdk-ecs-keycloak-httplistenerprovider"></a>

Creates a load balancer and an HTTP load balancer.

__Implements__: [IListenerInfoProvider](#wheatstalk-cdk-ecs-keycloak-ilistenerinfoprovider)

### Initializer




```ts
new HttpListenerProvider()
```





## class HttpsListenerProvider  <a id="wheatstalk-cdk-ecs-keycloak-httpslistenerprovider"></a>

Creates an application load balancer and an HTTPS listener with the given ACM certificates.

__Implements__: [IListenerInfoProvider](#wheatstalk-cdk-ecs-keycloak-ilistenerinfoprovider)

### Initializer




```ts
new HttpsListenerProvider(props: HttpsListenerProviderProps)
```

* **props** (<code>[HttpsListenerProviderProps](#wheatstalk-cdk-ecs-keycloak-httpslistenerproviderprops)</code>)  *No description*
  * **certificates** (<code>Array<[ICertificate](#aws-cdk-aws-certificatemanager-icertificate)></code>)  Certificates to use for the ALB listener. 




## class IngressAndPrivateVpcProvider  <a id="wheatstalk-cdk-ecs-keycloak-ingressandprivatevpcprovider"></a>

Provides a VPC with both private and public subnets.

__Implements__: [IVpcInfoProvider](#wheatstalk-cdk-ecs-keycloak-ivpcinfoprovider)

### Initializer




```ts
new IngressAndPrivateVpcProvider()
```





## class KeycloakCluster  <a id="wheatstalk-cdk-ecs-keycloak-keycloakcluster"></a>

A complete Keycloak cluster in a box.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new KeycloakCluster(scope: Construct, id: string, props?: KeycloakClusterProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[KeycloakClusterProps](#wheatstalk-cdk-ecs-keycloak-keycloakclusterprops)</code>)  *No description*
  * **circuitBreaker** (<code>boolean</code>)  Enable/disable the deployment circuit breaker. __*Default*__: true
  * **cloudMapNamespaceProvider** (<code>[ICloudMapNamespaceInfoProvider](#wheatstalk-cdk-ecs-keycloak-icloudmapnamespaceinfoprovider)</code>)  CloudMap namespace to use for service discovery. __*Default*__: creates one named 'keycloak-service-discovery'
  * **cpu** (<code>number</code>)  Fargate task cpu spec. __*Default*__: 1024
  * **databaseProvider** (<code>[IDatabaseInfoProvider](#wheatstalk-cdk-ecs-keycloak-idatabaseinfoprovider)</code>)  Database server. __*Default*__: creates a new one
  * **desiredCount** (<code>number</code>)  How many keycloak cluster members to spin up. __*Optional*__
  * **ecsClusterProvider** (<code>[IClusterInfoProvider](#wheatstalk-cdk-ecs-keycloak-iclusterinfoprovider)</code>)  Provide an ECS cluster. __*Default*__: a cluster is automatically created.
  * **healthCheckGracePeriod** (<code>[Duration](#aws-cdk-core-duration)</code>)  Initial grace period for Keycloak to spin up. __*Default*__: 10 minutes
  * **keycloak** (<code>[KeycloakContainerExtensionProps](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextensionprops)</code>)  Keycloak configuration. __*Optional*__
  * **listenerProvider** (<code>[IListenerInfoProvider](#wheatstalk-cdk-ecs-keycloak-ilistenerinfoprovider)</code>)  Add the service to an existing load balancer's listener. __*Default*__: a new load balancer is automatically created.
  * **maxHealthyPercent** (<code>number</code>)  The maximum percentage of healthy tasks during deployments. __*Optional*__
  * **memoryLimitMiB** (<code>number</code>)  Fargate task memory spec. __*Default*__: 2048
  * **minHealthyPercent** (<code>number</code>)  The minimum percentage of healthy tasks during deployments. __*Optional*__
  * **vpcProvider** (<code>[IVpcInfoProvider](#wheatstalk-cdk-ecs-keycloak-ivpcinfoprovider)</code>)  VPC to use. __*Default*__: creates one
  * **vpcTaskAssignPublicIp** (<code>boolean</code>)  Assign public IPs to the Fargate tasks. __*Default*__: false
  * **vpcTaskSubnets** (<code>[SubnetSelection](#aws-cdk-aws-ec2-subnetselection)</code>)  Where to place the instances within the VPC. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**service** | <code>[BaseService](#aws-cdk-aws-ecs-baseservice)</code> | The ECS service controlling the cluster tasks.
**targetGroup** | <code>[ApplicationTargetGroup](#aws-cdk-aws-elasticloadbalancingv2-applicationtargetgroup)</code> | The Target Group that the service registers with.



## class KeycloakContainerExtension  <a id="wheatstalk-cdk-ecs-keycloak-keycloakcontainerextension"></a>

Adds a keycloak container to a task definition.

To use ECS service discovery
to locate cluster members, you need to call `useCloudMapService` with the
CloudMap service so that we can configure the correct DNS query. Without
CloudMap service discovery, the Keycloak will use JDBC_PING.

__Implements__: [ITaskDefinitionExtension](#aws-cdk-aws-ecs-itaskdefinitionextension)

### Initializer




```ts
new KeycloakContainerExtension(props?: KeycloakContainerExtensionProps)
```

* **props** (<code>[KeycloakContainerExtensionProps](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextensionprops)</code>)  *No description*
  * **cacheOwnersAuthSessionsCount** (<code>number</code>)  The number of distributed cache owners for authentication sessions. __*Default*__: same as `cacheOwnersCount`
  * **cacheOwnersCount** (<code>number</code>)  The default number of distributed cache owners for each key. __*Default*__: 1
  * **containerName** (<code>string</code>)  A name for the container added to the task definition. __*Default*__: 'keycloak'
  * **databaseCredentials** (<code>[ISecret](#aws-cdk-aws-secretsmanager-isecret)</code>)  Secrets manager secret containing the RDS database credentials and connection information in JSON format. __*Default*__: none
  * **databaseName** (<code>string</code>)  Database name. __*Default*__: 'keycloak'
  * **databaseVendor** (<code>[KeycloakDatabaseVendor](#wheatstalk-cdk-ecs-keycloak-keycloakdatabasevendor)</code>)  The database vendor. __*Default*__: KeycloakDatabaseVendor.H2
  * **defaultAdminPassword** (<code>string</code>)  Default admin user's password. __*Default*__: 'admin'
  * **defaultAdminUser** (<code>string</code>)  Default admin user. __*Default*__: 'admin'
  * **image** (<code>[ContainerImage](#aws-cdk-aws-ecs-containerimage)</code>)  Keycloak container image to use. __*Default*__: use jboss/keycloak from docker hub.
  * **logging** (<code>[LogDriver](#aws-cdk-aws-ecs-logdriver)</code>)  Log driver for the task. __*Default*__: cloudwatch with one month retention
  * **memoryLimitMiB** (<code>number</code>)  Memory limit of the keycloak task. __*Default*__: 1024
  * **memoryReservationMiB** (<code>number</code>)  Memory reservation size for the keycloak task. __*Default*__: 80% of memoryLimitMiB



### Properties


Name | Type | Description 
-----|------|-------------
**cacheOwnersAuthSessionsCount** | <code>number</code> | The number of distributed auth session cache owners for each key.
**cacheOwnersCount** | <code>number</code> | The number of distributed cache owners for each key.
**containerName** | <code>string</code> | Name of the container added to the task definition.
**databaseName** | <code>string</code> | Name of the Keycloak database.
**databaseVendor** | <code>[KeycloakDatabaseVendor](#wheatstalk-cdk-ecs-keycloak-keycloakdatabasevendor)</code> | Database vendor.
**defaultAdminPassword** | <code>string</code> | The default admin user password.
**defaultAdminUser** | <code>string</code> | The default admin user's name.

### Methods


#### configureHealthCheck(targetGroup) <a id="wheatstalk-cdk-ecs-keycloak-keycloakcontainerextension-configurehealthcheck"></a>

Configure health checks on the target group.

```ts
configureHealthCheck(targetGroup: ApplicationTargetGroup): void
```

* **targetGroup** (<code>[ApplicationTargetGroup](#aws-cdk-aws-elasticloadbalancingv2-applicationtargetgroup)</code>)  *No description*




#### extend(taskDefinition) <a id="wheatstalk-cdk-ecs-keycloak-keycloakcontainerextension-extend"></a>

Apply the extension to the given TaskDefinition.

```ts
extend(taskDefinition: TaskDefinition): void
```

* **taskDefinition** (<code>[TaskDefinition](#aws-cdk-aws-ecs-taskdefinition)</code>)  *No description*




#### useCloudMapService(serviceDiscovery) <a id="wheatstalk-cdk-ecs-keycloak-keycloakcontainerextension-usecloudmapservice"></a>

Inform Keycloak of a CloudMap service discovery mechanism.

```ts
useCloudMapService(serviceDiscovery: IService): void
```

* **serviceDiscovery** (<code>[IService](#aws-cdk-aws-servicediscovery-iservice)</code>)  *No description*






## class KeycloakEc2TaskDefinition  <a id="wheatstalk-cdk-ecs-keycloak-keycloakec2taskdefinition"></a>

The details of a Keycloak task definition running on EC2.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IResource](#aws-cdk-core-iresource), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IConstruct](#aws-cdk-core-iconstruct), [ITaskDefinition](#aws-cdk-aws-ecs-itaskdefinition), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IConstruct](#aws-cdk-core-iconstruct), [IResource](#aws-cdk-core-iresource), [IEc2TaskDefinition](#aws-cdk-aws-ecs-iec2taskdefinition), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IConstruct](#aws-cdk-core-iconstruct), [IResource](#aws-cdk-core-iresource), [ITaskDefinition](#aws-cdk-aws-ecs-itaskdefinition), [IKeycloakTaskDefinition](#wheatstalk-cdk-ecs-keycloak-ikeycloaktaskdefinition)
__Extends__: [Ec2TaskDefinition](#aws-cdk-aws-ecs-ec2taskdefinition)

### Initializer




```ts
new KeycloakEc2TaskDefinition(scope: Construct, id: string, props?: KeycloakEc2TaskDefinitionProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[KeycloakEc2TaskDefinitionProps](#wheatstalk-cdk-ecs-keycloak-keycloakec2taskdefinitionprops)</code>)  *No description*
  * **executionRole** (<code>[IRole](#aws-cdk-aws-iam-irole)</code>)  The name of the IAM task execution role that grants the ECS agent to call AWS APIs on your behalf. __*Default*__: An execution role will be automatically created if you use ECR images in your task definition.
  * **family** (<code>string</code>)  The name of a family that this task definition is registered to. __*Default*__: Automatically generated name.
  * **proxyConfiguration** (<code>[ProxyConfiguration](#aws-cdk-aws-ecs-proxyconfiguration)</code>)  The configuration details for the App Mesh proxy. __*Default*__: No proxy configuration.
  * **taskRole** (<code>[IRole](#aws-cdk-aws-iam-irole)</code>)  The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf. __*Default*__: A task role is automatically created for you.
  * **volumes** (<code>Array<[Volume](#aws-cdk-aws-ecs-volume)></code>)  The list of volume definitions for the task. __*Default*__: No volumes are passed to the Docker daemon on a container instance.
  * **ipcMode** (<code>[IpcMode](#aws-cdk-aws-ecs-ipcmode)</code>)  The IPC resource namespace to use for the containers in the task. __*Default*__: IpcMode used by the task is not specified
  * **networkMode** (<code>[NetworkMode](#aws-cdk-aws-ecs-networkmode)</code>)  The Docker networking mode to use for the containers in the task. __*Default*__: NetworkMode.Bridge for EC2 tasks, AwsVpc for Fargate tasks.
  * **pidMode** (<code>[PidMode](#aws-cdk-aws-ecs-pidmode)</code>)  The process namespace to use for the containers in the task. __*Default*__: PidMode used by the task is not specified
  * **placementConstraints** (<code>Array<[PlacementConstraint](#aws-cdk-aws-ecs-placementconstraint)></code>)  An array of placement constraint objects to use for the task. __*Default*__: No placement constraints.
  * **keycloak** (<code>[KeycloakContainerExtensionProps](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextensionprops)</code>)  Keycloak configuration. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**keycloakContainerExtension** | <code>[KeycloakContainerExtension](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextension)</code> | The Keycloak container extension.

### Methods


#### configureHealthCheck(targetGroup) <a id="wheatstalk-cdk-ecs-keycloak-keycloakec2taskdefinition-configurehealthcheck"></a>

Configures the health check of the application target group.

```ts
configureHealthCheck(targetGroup: ApplicationTargetGroup): void
```

* **targetGroup** (<code>[ApplicationTargetGroup](#aws-cdk-aws-elasticloadbalancingv2-applicationtargetgroup)</code>)  *No description*




#### useCloudMapService(cloudMapService) <a id="wheatstalk-cdk-ecs-keycloak-keycloakec2taskdefinition-usecloudmapservice"></a>

Register the task definition with a cloudmap service.

```ts
useCloudMapService(cloudMapService: IService): void
```

* **cloudMapService** (<code>[IService](#aws-cdk-aws-servicediscovery-iservice)</code>)  *No description*






## class KeycloakFargateTaskDefinition  <a id="wheatstalk-cdk-ecs-keycloak-keycloakfargatetaskdefinition"></a>

The details of a Keycloak task definition running on Fargate.

__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IResource](#aws-cdk-core-iresource), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IConstruct](#aws-cdk-core-iconstruct), [ITaskDefinition](#aws-cdk-aws-ecs-itaskdefinition), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IConstruct](#aws-cdk-core-iconstruct), [IResource](#aws-cdk-core-iresource), [IFargateTaskDefinition](#aws-cdk-aws-ecs-ifargatetaskdefinition), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IConstruct](#aws-cdk-core-iconstruct), [IResource](#aws-cdk-core-iresource), [ITaskDefinition](#aws-cdk-aws-ecs-itaskdefinition), [IKeycloakTaskDefinition](#wheatstalk-cdk-ecs-keycloak-ikeycloaktaskdefinition)
__Extends__: [FargateTaskDefinition](#aws-cdk-aws-ecs-fargatetaskdefinition)

### Initializer




```ts
new KeycloakFargateTaskDefinition(scope: Construct, id: string, props?: KeycloakFargateTaskDefinitionProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[KeycloakFargateTaskDefinitionProps](#wheatstalk-cdk-ecs-keycloak-keycloakfargatetaskdefinitionprops)</code>)  *No description*
  * **executionRole** (<code>[IRole](#aws-cdk-aws-iam-irole)</code>)  The name of the IAM task execution role that grants the ECS agent to call AWS APIs on your behalf. __*Default*__: An execution role will be automatically created if you use ECR images in your task definition.
  * **family** (<code>string</code>)  The name of a family that this task definition is registered to. __*Default*__: Automatically generated name.
  * **proxyConfiguration** (<code>[ProxyConfiguration](#aws-cdk-aws-ecs-proxyconfiguration)</code>)  The configuration details for the App Mesh proxy. __*Default*__: No proxy configuration.
  * **taskRole** (<code>[IRole](#aws-cdk-aws-iam-irole)</code>)  The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf. __*Default*__: A task role is automatically created for you.
  * **volumes** (<code>Array<[Volume](#aws-cdk-aws-ecs-volume)></code>)  The list of volume definitions for the task. __*Default*__: No volumes are passed to the Docker daemon on a container instance.
  * **cpu** (<code>number</code>)  The number of cpu units used by the task. __*Default*__: 256
  * **memoryLimitMiB** (<code>number</code>)  The amount (in MiB) of memory used by the task. __*Default*__: 512
  * **keycloak** (<code>[KeycloakContainerExtensionProps](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextensionprops)</code>)  Keycloak configuration. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
**keycloakContainerExtension** | <code>[KeycloakContainerExtension](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextension)</code> | The Keycloak container extension.

### Methods


#### configureHealthCheck(targetGroup) <a id="wheatstalk-cdk-ecs-keycloak-keycloakfargatetaskdefinition-configurehealthcheck"></a>

Configures the health check of the application target group.

```ts
configureHealthCheck(targetGroup: ApplicationTargetGroup): void
```

* **targetGroup** (<code>[ApplicationTargetGroup](#aws-cdk-aws-elasticloadbalancingv2-applicationtargetgroup)</code>)  *No description*




#### useCloudMapService(cloudMapService) <a id="wheatstalk-cdk-ecs-keycloak-keycloakfargatetaskdefinition-usecloudmapservice"></a>

Register the task definition with a cloudmap service.

```ts
useCloudMapService(cloudMapService: IService): void
```

* **cloudMapService** (<code>[IService](#aws-cdk-aws-servicediscovery-iservice)</code>)  *No description*






## class ListenerProvider  <a id="wheatstalk-cdk-ecs-keycloak-listenerprovider"></a>

Convenience interface for providing ListenerInfo to the cluster.


### Initializer




```ts
new ListenerProvider()
```



### Methods


#### *static* fromListenerInfo(listenerInfo) <a id="wheatstalk-cdk-ecs-keycloak-listenerprovider-fromlistenerinfo"></a>

Use an already-existing listener.

```ts
static fromListenerInfo(listenerInfo: ListenerInfo): IListenerInfoProvider
```

* **listenerInfo** (<code>[ListenerInfo](#wheatstalk-cdk-ecs-keycloak-listenerinfo)</code>)  *No description*
  * **listener** (<code>[IApplicationListener](#aws-cdk-aws-elasticloadbalancingv2-iapplicationlistener)</code>)  *No description* 
  * **conditions** (<code>Array<[ListenerCondition](#aws-cdk-aws-elasticloadbalancingv2-listenercondition)></code>)  *No description* __*Optional*__
  * **priority** (<code>number</code>)  *No description* __*Optional*__

__Returns__:
* <code>[IListenerInfoProvider](#wheatstalk-cdk-ecs-keycloak-ilistenerinfoprovider)</code>

#### *static* http() <a id="wheatstalk-cdk-ecs-keycloak-listenerprovider-http"></a>

Create a load balancer that listens for HTTP.

```ts
static http(): IListenerInfoProvider
```


__Returns__:
* <code>[IListenerInfoProvider](#wheatstalk-cdk-ecs-keycloak-ilistenerinfoprovider)</code>

#### *static* https(props) <a id="wheatstalk-cdk-ecs-keycloak-listenerprovider-https"></a>

Create a load balancer that listens for HTTPS with your certificates.

```ts
static https(props: HttpsListenerProviderProps): IListenerInfoProvider
```

* **props** (<code>[HttpsListenerProviderProps](#wheatstalk-cdk-ecs-keycloak-httpslistenerproviderprops)</code>)  *No description*
  * **certificates** (<code>Array<[ICertificate](#aws-cdk-aws-certificatemanager-icertificate)></code>)  Certificates to use for the ALB listener. 

__Returns__:
* <code>[IListenerInfoProvider](#wheatstalk-cdk-ecs-keycloak-ilistenerinfoprovider)</code>



## class ServerlessAuroraDatabaseProvider  <a id="wheatstalk-cdk-ecs-keycloak-serverlessauroradatabaseprovider"></a>

Provides a serverless Aurora database cluster.

__Implements__: [IDatabaseInfoProvider](#wheatstalk-cdk-ecs-keycloak-idatabaseinfoprovider)

### Initializer




```ts
new ServerlessAuroraDatabaseProvider(props?: ServerlessAuroraDatabaseProviderProps)
```

* **props** (<code>[ServerlessAuroraDatabaseProviderProps](#wheatstalk-cdk-ecs-keycloak-serverlessauroradatabaseproviderprops)</code>)  *No description*
  * **engine** (<code>[IClusterEngine](#aws-cdk-aws-rds-iclusterengine)</code>)  Cluster engine. __*Default*__: rds.DatabaseClusterEngine.AURORA_MYSQL
  * **scaling** (<code>[ServerlessScalingOptions](#aws-cdk-aws-rds-serverlessscalingoptions)</code>)  Scaling options. __*Default*__: 5 minute auto pause, min and max capacity of 1 acu.
  * **subnets** (<code>[SubnetSelection](#aws-cdk-aws-ec2-subnetselection)</code>)  Select subnets to register the database cluster in. __*Optional*__




## class VpcProvider  <a id="wheatstalk-cdk-ecs-keycloak-vpcprovider"></a>




### Initializer




```ts
new VpcProvider()
```



### Methods


#### *static* fromExistingVpc(vpc) <a id="wheatstalk-cdk-ecs-keycloak-vpcprovider-fromexistingvpc"></a>

Provides an already-existing vpc.

```ts
static fromExistingVpc(vpc: IVpc): IVpcInfoProvider
```

* **vpc** (<code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code>)  *No description*

__Returns__:
* <code>[IVpcInfoProvider](#wheatstalk-cdk-ecs-keycloak-ivpcinfoprovider)</code>

#### *static* ingressAndPrivateVpc() <a id="wheatstalk-cdk-ecs-keycloak-vpcprovider-ingressandprivatevpc"></a>

Provides a VPC with a public subnet and private subnet config.

```ts
static ingressAndPrivateVpc(): IVpcInfoProvider
```


__Returns__:
* <code>[IVpcInfoProvider](#wheatstalk-cdk-ecs-keycloak-ivpcinfoprovider)</code>



## struct ClusterInfo  <a id="wheatstalk-cdk-ecs-keycloak-clusterinfo"></a>


Information about the ecs cluster.



Name | Type | Description 
-----|------|-------------
**cluster** | <code>[ICluster](#aws-cdk-aws-ecs-icluster)</code> | The ECS cluster for adding a service.



## struct DatabaseInfo  <a id="wheatstalk-cdk-ecs-keycloak-databaseinfo"></a>


Information about needed to connect to the database.



Name | Type | Description 
-----|------|-------------
**credentials** | <code>[ISecret](#aws-cdk-aws-secretsmanager-isecret)</code> | Database credentials in standard RDS json format.
**vendor** | <code>[KeycloakDatabaseVendor](#wheatstalk-cdk-ecs-keycloak-keycloakdatabasevendor)</code> | Database vendor.
**connectable**? | <code>[IConnectable](#aws-cdk-aws-ec2-iconnectable)</code> | A connectable so that the cluster can allow itself to connect to the database.<br/>__*Optional*__



## struct DatabaseInstanceProviderProps  <a id="wheatstalk-cdk-ecs-keycloak-databaseinstanceproviderprops"></a>


Basic props for creating a database instance.



Name | Type | Description 
-----|------|-------------
**engine**? | <code>[IInstanceEngine](#aws-cdk-aws-rds-iinstanceengine)</code> | Instance database engine.<br/>__*Default*__: mysql 8.0
**instanceType**? | <code>[InstanceType](#aws-cdk-aws-ec2-instancetype)</code> | Instance type.<br/>__*Default*__: t2.micro
**subnets**? | <code>[SubnetSelection](#aws-cdk-aws-ec2-subnetselection)</code> | Select subnets to register the database instance in.<br/>__*Optional*__



## struct EnsureMysqlDatabaseExtensionProps  <a id="wheatstalk-cdk-ecs-keycloak-ensuremysqldatabaseextensionprops"></a>


Props for EnsureMysqlDatabaseExtension.



Name | Type | Description 
-----|------|-------------
**databaseCredentials** | <code>[ISecret](#aws-cdk-aws-secretsmanager-isecret)</code> | RDS credentials.
**databaseName** | <code>string</code> | Name of the database to create.
**containerName**? | <code>string</code> | Name of the container to add to do this work.<br/>__*Default*__: 'ensure-mysql-database'
**logging**? | <code>[LogDriver](#aws-cdk-aws-ecs-logdriver)</code> | Logging driver.<br/>__*Optional*__



## struct HttpsListenerProviderProps  <a id="wheatstalk-cdk-ecs-keycloak-httpslistenerproviderprops"></a>


Properties for a new HTTPS-listening load balancer.



Name | Type | Description 
-----|------|-------------
**certificates** | <code>Array<[ICertificate](#aws-cdk-aws-certificatemanager-icertificate)></code> | Certificates to use for the ALB listener.



## interface ICloudMapNamespaceInfoProvider  <a id="wheatstalk-cdk-ecs-keycloak-icloudmapnamespaceinfoprovider"></a>

__Obtainable from__: [CloudMapNamespaceProvider](#wheatstalk-cdk-ecs-keycloak-cloudmapnamespaceprovider).[privateDns](#wheatstalk-cdk-ecs-keycloak-cloudmapnamespaceprovider#wheatstalk-cdk-ecs-keycloak-cloudmapnamespaceprovider-privatedns)()

Provides CloudMapNamespaceInfo once the VPC is available.


## interface IClusterInfoProvider  <a id="wheatstalk-cdk-ecs-keycloak-iclusterinfoprovider"></a>

__Implemented by__: [EcsClusterInfoProvider](#wheatstalk-cdk-ecs-keycloak-ecsclusterinfoprovider)
__Obtainable from__: [ClusterProvider](#wheatstalk-cdk-ecs-keycloak-clusterprovider).[cluster](#wheatstalk-cdk-ecs-keycloak-clusterprovider#wheatstalk-cdk-ecs-keycloak-clusterprovider-cluster)(), [ClusterProvider](#wheatstalk-cdk-ecs-keycloak-clusterprovider).[fromClusterInfo](#wheatstalk-cdk-ecs-keycloak-clusterprovider#wheatstalk-cdk-ecs-keycloak-clusterprovider-fromclusterinfo)()

Provides ClusterInfo after the VPC is available.


## interface IDatabaseInfoProvider  <a id="wheatstalk-cdk-ecs-keycloak-idatabaseinfoprovider"></a>

__Implemented by__: [DatabaseInstanceProvider](#wheatstalk-cdk-ecs-keycloak-databaseinstanceprovider), [ServerlessAuroraDatabaseProvider](#wheatstalk-cdk-ecs-keycloak-serverlessauroradatabaseprovider)
__Obtainable from__: [DatabaseProvider](#wheatstalk-cdk-ecs-keycloak-databaseprovider).[fromDatabaseInfo](#wheatstalk-cdk-ecs-keycloak-databaseprovider#wheatstalk-cdk-ecs-keycloak-databaseprovider-fromdatabaseinfo)(), [DatabaseProvider](#wheatstalk-cdk-ecs-keycloak-databaseprovider).[serverlessAuroraCluster](#wheatstalk-cdk-ecs-keycloak-databaseprovider#wheatstalk-cdk-ecs-keycloak-databaseprovider-serverlessauroracluster)()

Provides DatabaseInfo after the VPC is available.


## interface IKeycloakTaskDefinition  <a id="wheatstalk-cdk-ecs-keycloak-ikeycloaktaskdefinition"></a>

__Implemented by__: [KeycloakEc2TaskDefinition](#wheatstalk-cdk-ecs-keycloak-keycloakec2taskdefinition), [KeycloakFargateTaskDefinition](#wheatstalk-cdk-ecs-keycloak-keycloakfargatetaskdefinition)

A Keycloak task definition.

### Properties


Name | Type | Description 
-----|------|-------------
**keycloakContainerExtension** | <code>[KeycloakContainerExtension](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextension)</code> | The Keycloak container extension.

### Methods


#### configureHealthCheck(targetGroup) <a id="wheatstalk-cdk-ecs-keycloak-ikeycloaktaskdefinition-configurehealthcheck"></a>

Configures the health check of the application target group.

```ts
configureHealthCheck(targetGroup: ApplicationTargetGroup): void
```

* **targetGroup** (<code>[ApplicationTargetGroup](#aws-cdk-aws-elasticloadbalancingv2-applicationtargetgroup)</code>)  *No description*




#### useCloudMapService(cloudMapService) <a id="wheatstalk-cdk-ecs-keycloak-ikeycloaktaskdefinition-usecloudmapservice"></a>

Register the task definition with a cloudmap service.

```ts
useCloudMapService(cloudMapService: IService): void
```

* **cloudMapService** (<code>[IService](#aws-cdk-aws-servicediscovery-iservice)</code>)  *No description*






## interface IListenerInfoProvider  <a id="wheatstalk-cdk-ecs-keycloak-ilistenerinfoprovider"></a>

__Implemented by__: [HttpListenerProvider](#wheatstalk-cdk-ecs-keycloak-httplistenerprovider), [HttpsListenerProvider](#wheatstalk-cdk-ecs-keycloak-httpslistenerprovider)
__Obtainable from__: [ListenerProvider](#wheatstalk-cdk-ecs-keycloak-listenerprovider).[fromListenerInfo](#wheatstalk-cdk-ecs-keycloak-listenerprovider#wheatstalk-cdk-ecs-keycloak-listenerprovider-fromlistenerinfo)(), [ListenerProvider](#wheatstalk-cdk-ecs-keycloak-listenerprovider).[http](#wheatstalk-cdk-ecs-keycloak-listenerprovider#wheatstalk-cdk-ecs-keycloak-listenerprovider-http)(), [ListenerProvider](#wheatstalk-cdk-ecs-keycloak-listenerprovider).[https](#wheatstalk-cdk-ecs-keycloak-listenerprovider#wheatstalk-cdk-ecs-keycloak-listenerprovider-https)()

Provides ListenerInfo once the VPC is available.


## interface IVpcInfoProvider  <a id="wheatstalk-cdk-ecs-keycloak-ivpcinfoprovider"></a>

__Implemented by__: [IngressAndPrivateVpcProvider](#wheatstalk-cdk-ecs-keycloak-ingressandprivatevpcprovider)
__Obtainable from__: [VpcProvider](#wheatstalk-cdk-ecs-keycloak-vpcprovider).[fromExistingVpc](#wheatstalk-cdk-ecs-keycloak-vpcprovider#wheatstalk-cdk-ecs-keycloak-vpcprovider-fromexistingvpc)(), [VpcProvider](#wheatstalk-cdk-ecs-keycloak-vpcprovider).[ingressAndPrivateVpc](#wheatstalk-cdk-ecs-keycloak-vpcprovider#wheatstalk-cdk-ecs-keycloak-vpcprovider-ingressandprivatevpc)()

Provides VpcInfo.


## struct KeycloakClusterProps  <a id="wheatstalk-cdk-ecs-keycloak-keycloakclusterprops"></a>


Props for `KeycloakCluster`.



Name | Type | Description 
-----|------|-------------
**circuitBreaker**? | <code>boolean</code> | Enable/disable the deployment circuit breaker.<br/>__*Default*__: true
**cloudMapNamespaceProvider**? | <code>[ICloudMapNamespaceInfoProvider](#wheatstalk-cdk-ecs-keycloak-icloudmapnamespaceinfoprovider)</code> | CloudMap namespace to use for service discovery.<br/>__*Default*__: creates one named 'keycloak-service-discovery'
**cpu**? | <code>number</code> | Fargate task cpu spec.<br/>__*Default*__: 1024
**databaseProvider**? | <code>[IDatabaseInfoProvider](#wheatstalk-cdk-ecs-keycloak-idatabaseinfoprovider)</code> | Database server.<br/>__*Default*__: creates a new one
**desiredCount**? | <code>number</code> | How many keycloak cluster members to spin up.<br/>__*Optional*__
**ecsClusterProvider**? | <code>[IClusterInfoProvider](#wheatstalk-cdk-ecs-keycloak-iclusterinfoprovider)</code> | Provide an ECS cluster.<br/>__*Default*__: a cluster is automatically created.
**healthCheckGracePeriod**? | <code>[Duration](#aws-cdk-core-duration)</code> | Initial grace period for Keycloak to spin up.<br/>__*Default*__: 10 minutes
**keycloak**? | <code>[KeycloakContainerExtensionProps](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextensionprops)</code> | Keycloak configuration.<br/>__*Optional*__
**listenerProvider**? | <code>[IListenerInfoProvider](#wheatstalk-cdk-ecs-keycloak-ilistenerinfoprovider)</code> | Add the service to an existing load balancer's listener.<br/>__*Default*__: a new load balancer is automatically created.
**maxHealthyPercent**? | <code>number</code> | The maximum percentage of healthy tasks during deployments.<br/>__*Optional*__
**memoryLimitMiB**? | <code>number</code> | Fargate task memory spec.<br/>__*Default*__: 2048
**minHealthyPercent**? | <code>number</code> | The minimum percentage of healthy tasks during deployments.<br/>__*Optional*__
**vpcProvider**? | <code>[IVpcInfoProvider](#wheatstalk-cdk-ecs-keycloak-ivpcinfoprovider)</code> | VPC to use.<br/>__*Default*__: creates one
**vpcTaskAssignPublicIp**? | <code>boolean</code> | Assign public IPs to the Fargate tasks.<br/>__*Default*__: false
**vpcTaskSubnets**? | <code>[SubnetSelection](#aws-cdk-aws-ec2-subnetselection)</code> | Where to place the instances within the VPC.<br/>__*Optional*__



## struct KeycloakContainerExtensionProps  <a id="wheatstalk-cdk-ecs-keycloak-keycloakcontainerextensionprops"></a>


Configuration for the Keycloak container.



Name | Type | Description 
-----|------|-------------
**cacheOwnersAuthSessionsCount**? | <code>number</code> | The number of distributed cache owners for authentication sessions.<br/>__*Default*__: same as `cacheOwnersCount`
**cacheOwnersCount**? | <code>number</code> | The default number of distributed cache owners for each key.<br/>__*Default*__: 1
**containerName**? | <code>string</code> | A name for the container added to the task definition.<br/>__*Default*__: 'keycloak'
**databaseCredentials**? | <code>[ISecret](#aws-cdk-aws-secretsmanager-isecret)</code> | Secrets manager secret containing the RDS database credentials and connection information in JSON format.<br/>__*Default*__: none
**databaseName**? | <code>string</code> | Database name.<br/>__*Default*__: 'keycloak'
**databaseVendor**? | <code>[KeycloakDatabaseVendor](#wheatstalk-cdk-ecs-keycloak-keycloakdatabasevendor)</code> | The database vendor.<br/>__*Default*__: KeycloakDatabaseVendor.H2
**defaultAdminPassword**? | <code>string</code> | Default admin user's password.<br/>__*Default*__: 'admin'
**defaultAdminUser**? | <code>string</code> | Default admin user.<br/>__*Default*__: 'admin'
**image**? | <code>[ContainerImage](#aws-cdk-aws-ecs-containerimage)</code> | Keycloak container image to use.<br/>__*Default*__: use jboss/keycloak from docker hub.
**logging**? | <code>[LogDriver](#aws-cdk-aws-ecs-logdriver)</code> | Log driver for the task.<br/>__*Default*__: cloudwatch with one month retention
**memoryLimitMiB**? | <code>number</code> | Memory limit of the keycloak task.<br/>__*Default*__: 1024
**memoryReservationMiB**? | <code>number</code> | Memory reservation size for the keycloak task.<br/>__*Default*__: 80% of memoryLimitMiB



## struct KeycloakEc2TaskDefinitionProps  <a id="wheatstalk-cdk-ecs-keycloak-keycloakec2taskdefinitionprops"></a>


Props for `KeycloakEc2TaskDefinition`.



Name | Type | Description 
-----|------|-------------
**executionRole**? | <code>[IRole](#aws-cdk-aws-iam-irole)</code> | The name of the IAM task execution role that grants the ECS agent to call AWS APIs on your behalf.<br/>__*Default*__: An execution role will be automatically created if you use ECR images in your task definition.
**family**? | <code>string</code> | The name of a family that this task definition is registered to.<br/>__*Default*__: Automatically generated name.
**ipcMode**? | <code>[IpcMode](#aws-cdk-aws-ecs-ipcmode)</code> | The IPC resource namespace to use for the containers in the task.<br/>__*Default*__: IpcMode used by the task is not specified
**keycloak**? | <code>[KeycloakContainerExtensionProps](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextensionprops)</code> | Keycloak configuration.<br/>__*Optional*__
**networkMode**? | <code>[NetworkMode](#aws-cdk-aws-ecs-networkmode)</code> | The Docker networking mode to use for the containers in the task.<br/>__*Default*__: NetworkMode.Bridge for EC2 tasks, AwsVpc for Fargate tasks.
**pidMode**? | <code>[PidMode](#aws-cdk-aws-ecs-pidmode)</code> | The process namespace to use for the containers in the task.<br/>__*Default*__: PidMode used by the task is not specified
**placementConstraints**? | <code>Array<[PlacementConstraint](#aws-cdk-aws-ecs-placementconstraint)></code> | An array of placement constraint objects to use for the task.<br/>__*Default*__: No placement constraints.
**proxyConfiguration**? | <code>[ProxyConfiguration](#aws-cdk-aws-ecs-proxyconfiguration)</code> | The configuration details for the App Mesh proxy.<br/>__*Default*__: No proxy configuration.
**taskRole**? | <code>[IRole](#aws-cdk-aws-iam-irole)</code> | The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf.<br/>__*Default*__: A task role is automatically created for you.
**volumes**? | <code>Array<[Volume](#aws-cdk-aws-ecs-volume)></code> | The list of volume definitions for the task.<br/>__*Default*__: No volumes are passed to the Docker daemon on a container instance.



## struct KeycloakFargateTaskDefinitionProps  <a id="wheatstalk-cdk-ecs-keycloak-keycloakfargatetaskdefinitionprops"></a>


Props for `KeycloakFargateTaskDefinition`.



Name | Type | Description 
-----|------|-------------
**cpu**? | <code>number</code> | The number of cpu units used by the task.<br/>__*Default*__: 256
**executionRole**? | <code>[IRole](#aws-cdk-aws-iam-irole)</code> | The name of the IAM task execution role that grants the ECS agent to call AWS APIs on your behalf.<br/>__*Default*__: An execution role will be automatically created if you use ECR images in your task definition.
**family**? | <code>string</code> | The name of a family that this task definition is registered to.<br/>__*Default*__: Automatically generated name.
**keycloak**? | <code>[KeycloakContainerExtensionProps](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextensionprops)</code> | Keycloak configuration.<br/>__*Optional*__
**memoryLimitMiB**? | <code>number</code> | The amount (in MiB) of memory used by the task.<br/>__*Default*__: 512
**proxyConfiguration**? | <code>[ProxyConfiguration](#aws-cdk-aws-ecs-proxyconfiguration)</code> | The configuration details for the App Mesh proxy.<br/>__*Default*__: No proxy configuration.
**taskRole**? | <code>[IRole](#aws-cdk-aws-iam-irole)</code> | The name of the IAM role that grants containers in the task permission to call AWS APIs on your behalf.<br/>__*Default*__: A task role is automatically created for you.
**volumes**? | <code>Array<[Volume](#aws-cdk-aws-ecs-volume)></code> | The list of volume definitions for the task.<br/>__*Default*__: No volumes are passed to the Docker daemon on a container instance.



## struct ListenerInfo  <a id="wheatstalk-cdk-ecs-keycloak-listenerinfo"></a>


Information about how to register with a load balancer.



Name | Type | Description 
-----|------|-------------
**listener** | <code>[IApplicationListener](#aws-cdk-aws-elasticloadbalancingv2-iapplicationlistener)</code> | <span></span>
**conditions**? | <code>Array<[ListenerCondition](#aws-cdk-aws-elasticloadbalancingv2-listenercondition)></code> | __*Optional*__
**priority**? | <code>number</code> | __*Optional*__



## struct PrivateDnsNamespaceProviderProps  <a id="wheatstalk-cdk-ecs-keycloak-privatednsnamespaceproviderprops"></a>


Props for creating a private Dns Namespace.



Name | Type | Description 
-----|------|-------------
**name**? | <code>string</code> | The globally unique name for the namespace.<br/>__*Default*__: 'keycloak-service-discovery'



## struct ServerlessAuroraDatabaseProviderProps  <a id="wheatstalk-cdk-ecs-keycloak-serverlessauroradatabaseproviderprops"></a>


Basic props for creating a serverless Aurora database cluster.



Name | Type | Description 
-----|------|-------------
**engine**? | <code>[IClusterEngine](#aws-cdk-aws-rds-iclusterengine)</code> | Cluster engine.<br/>__*Default*__: rds.DatabaseClusterEngine.AURORA_MYSQL
**scaling**? | <code>[ServerlessScalingOptions](#aws-cdk-aws-rds-serverlessscalingoptions)</code> | Scaling options.<br/>__*Default*__: 5 minute auto pause, min and max capacity of 1 acu.
**subnets**? | <code>[SubnetSelection](#aws-cdk-aws-ec2-subnetselection)</code> | Select subnets to register the database cluster in.<br/>__*Optional*__



## struct VpcInfo  <a id="wheatstalk-cdk-ecs-keycloak-vpcinfo"></a>


Information about the VPC other providers may opt to privde their resources in.



Name | Type | Description 
-----|------|-------------
**vpc** | <code>[IVpc](#aws-cdk-aws-ec2-ivpc)</code> | The VPC.



## enum KeycloakDatabaseVendor  <a id="wheatstalk-cdk-ecs-keycloak-keycloakdatabasevendor"></a>

The database vendor.

Name | Description
-----|-----
**H2** |H2 In-memory Database (Warning: data deleted when task restarts.).
**MYSQL** |MySQL.
**MARIADB** |MariaDB.
**MSSQL** |MSSQL (not yet supported, please submit a PR).
**ORACLE** |Oracle database (not yet supported, please submit a PR).
**POSTGRES** |Postgres (not yet supported, please submit a PR).


