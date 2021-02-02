# API Reference

**Classes**

Name|Description
----|-----------
[EnsureMysqlDatabaseExtension](#wheatstalk-cdk-ecs-keycloak-ensuremysqldatabaseextension)|Ensures a MySQL database exists by adding an init container.
[KeyCloakContainerExtension](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextension)|Adds a keycloak container to a task definition it.


**Structs**

Name|Description
----|-----------
[EnsureMysqlDatabaseExtensionProps](#wheatstalk-cdk-ecs-keycloak-ensuremysqldatabaseextensionprops)|Props for EnsureMysqlDatabaseExtension.
[KeyCloakContainerExtensionProps](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextensionprops)|*No description*


**Enums**

Name|Description
----|-----------
[KeyCloakDatabaseVendor](#wheatstalk-cdk-ecs-keycloak-keycloakdatabasevendor)|*No description*



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


### Methods


#### extend(taskDefinition) <a id="wheatstalk-cdk-ecs-keycloak-ensuremysqldatabaseextension-extend"></a>

Apply the extension to the given TaskDefinition.

```ts
extend(taskDefinition: TaskDefinition): void
```

* **taskDefinition** (<code>[TaskDefinition](#aws-cdk-aws-ecs-taskdefinition)</code>)  *No description*






## class KeyCloakContainerExtension  <a id="wheatstalk-cdk-ecs-keycloak-keycloakcontainerextension"></a>

Adds a keycloak container to a task definition it.

To use ECS service
discovery to locate cluster members, you need to call `useCloudMapService`
with the CloudMap service so that we can configure the correct DNS query.
Without CloudMap service discovery, the default will be to use JDBC_ping.

__Implements__: [ITaskDefinitionExtension](#aws-cdk-aws-ecs-itaskdefinitionextension)

### Initializer




```ts
new KeyCloakContainerExtension(props?: KeyCloakContainerExtensionProps)
```

* **props** (<code>[KeyCloakContainerExtensionProps](#wheatstalk-cdk-ecs-keycloak-keycloakcontainerextensionprops)</code>)  *No description*
  * **cacheOwnersAuthSessionsCount** (<code>number</code>)  The number of distributed cache owners for authentication sessions. __*Default*__: same as `cacheOwnersCount`
  * **cacheOwnersCount** (<code>number</code>)  The default number of distributed cache owners for each key. __*Default*__: 1
  * **containerName** (<code>string</code>)  A name for the container added to the task definition. __*Default*__: 'keycloak'
  * **databaseCredentials** (<code>[ISecret](#aws-cdk-aws-secretsmanager-isecret)</code>)  Secrets manager secret containing the RDS database credentials and connection information in JSON format. __*Default*__: none
  * **databaseName** (<code>string</code>)  Database name. __*Default*__: 'keycloak'
  * **databaseVendor** (<code>[KeyCloakDatabaseVendor](#wheatstalk-cdk-ecs-keycloak-keycloakdatabasevendor)</code>)  The database vendor. __*Default*__: KeyCloakDatabaseVendor.H2
  * **defaultAdminPassword** (<code>string</code>)  Default admin user's password. __*Default*__: 'admin'
  * **defaultAdminUser** (<code>string</code>)  Default admin user. __*Default*__: 'admin'



### Properties


Name | Type | Description 
-----|------|-------------
**cacheOwnersAuthSessionsCount** | <code>number</code> | The number of distributed auth session cache owners for each key.
**cacheOwnersCount** | <code>number</code> | The number of distributed cache owners for each key.
**containerName** | <code>string</code> | Name of the container added to the task definition.
**databaseName** | <code>string</code> | Name of the Keycloak database.
**databaseVendor** | <code>string</code> | Database vendor name.
**defaultAdminPassword** | <code>string</code> | The default admin user password.
**defaultAdminUser** | <code>string</code> | The default admin user's name.

### Methods


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






## struct EnsureMysqlDatabaseExtensionProps  <a id="wheatstalk-cdk-ecs-keycloak-ensuremysqldatabaseextensionprops"></a>


Props for EnsureMysqlDatabaseExtension.



Name | Type | Description 
-----|------|-------------
**databaseCredentials** | <code>[ISecret](#aws-cdk-aws-secretsmanager-isecret)</code> | RDS credentials.
**databaseName** | <code>string</code> | Name of the database to create.
**containerName**? | <code>string</code> | Name of the container to add to do this work.<br/>__*Default*__: 'ensure-mysql-database'



## struct KeyCloakContainerExtensionProps  <a id="wheatstalk-cdk-ecs-keycloak-keycloakcontainerextensionprops"></a>






Name | Type | Description 
-----|------|-------------
**cacheOwnersAuthSessionsCount**? | <code>number</code> | The number of distributed cache owners for authentication sessions.<br/>__*Default*__: same as `cacheOwnersCount`
**cacheOwnersCount**? | <code>number</code> | The default number of distributed cache owners for each key.<br/>__*Default*__: 1
**containerName**? | <code>string</code> | A name for the container added to the task definition.<br/>__*Default*__: 'keycloak'
**databaseCredentials**? | <code>[ISecret](#aws-cdk-aws-secretsmanager-isecret)</code> | Secrets manager secret containing the RDS database credentials and connection information in JSON format.<br/>__*Default*__: none
**databaseName**? | <code>string</code> | Database name.<br/>__*Default*__: 'keycloak'
**databaseVendor**? | <code>[KeyCloakDatabaseVendor](#wheatstalk-cdk-ecs-keycloak-keycloakdatabasevendor)</code> | The database vendor.<br/>__*Default*__: KeyCloakDatabaseVendor.H2
**defaultAdminPassword**? | <code>string</code> | Default admin user's password.<br/>__*Default*__: 'admin'
**defaultAdminUser**? | <code>string</code> | Default admin user.<br/>__*Default*__: 'admin'



## enum KeyCloakDatabaseVendor  <a id="wheatstalk-cdk-ecs-keycloak-keycloakdatabasevendor"></a>



Name | Description
-----|-----
**H2** |H2 In-memory Database (Warning: data deleted when task restarts.).
**POSTGRES** |Postgres.
**MYSQL** |MySQL.
**MARIADB** |MariaDB.
**ORACLE** |Oracle database.
**MSSQL** |MSSQL.


