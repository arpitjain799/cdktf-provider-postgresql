# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### Database <a name="@cdktf/provider-postgresql.Database"></a>

Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/database.html postgresql_database}.

#### Initializers <a name="@cdktf/provider-postgresql.Database.Initializer"></a>

```typescript
import { Database } from '@cdktf/provider-postgresql'

new Database(scope: Construct, id: string, config: DatabaseConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Database.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Database.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Database.parameter.config"></a>

- *Type:* [`@cdktf/provider-postgresql.DatabaseConfig`](#@cdktf/provider-postgresql.DatabaseConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAllowConnections` <a name="@cdktf/provider-postgresql.Database.resetAllowConnections"></a>

```typescript
public resetAllowConnections()
```

##### `resetConnectionLimit` <a name="@cdktf/provider-postgresql.Database.resetConnectionLimit"></a>

```typescript
public resetConnectionLimit()
```

##### `resetEncoding` <a name="@cdktf/provider-postgresql.Database.resetEncoding"></a>

```typescript
public resetEncoding()
```

##### `resetIsTemplate` <a name="@cdktf/provider-postgresql.Database.resetIsTemplate"></a>

```typescript
public resetIsTemplate()
```

##### `resetLcCollate` <a name="@cdktf/provider-postgresql.Database.resetLcCollate"></a>

```typescript
public resetLcCollate()
```

##### `resetLcCtype` <a name="@cdktf/provider-postgresql.Database.resetLcCtype"></a>

```typescript
public resetLcCtype()
```

##### `resetOwner` <a name="@cdktf/provider-postgresql.Database.resetOwner"></a>

```typescript
public resetOwner()
```

##### `resetTablespaceName` <a name="@cdktf/provider-postgresql.Database.resetTablespaceName"></a>

```typescript
public resetTablespaceName()
```

##### `resetTemplate` <a name="@cdktf/provider-postgresql.Database.resetTemplate"></a>

```typescript
public resetTemplate()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Database.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `allowConnectionsInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.allowConnectionsInput"></a>

```typescript
public readonly allowConnectionsInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `connectionLimitInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.connectionLimitInput"></a>

```typescript
public readonly connectionLimitInput: number;
```

- *Type:* `number`

---

##### `encodingInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.encodingInput"></a>

```typescript
public readonly encodingInput: string;
```

- *Type:* `string`

---

##### `isTemplateInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.isTemplateInput"></a>

```typescript
public readonly isTemplateInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `lcCollateInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.lcCollateInput"></a>

```typescript
public readonly lcCollateInput: string;
```

- *Type:* `string`

---

##### `lcCtypeInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.lcCtypeInput"></a>

```typescript
public readonly lcCtypeInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `ownerInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* `string`

---

##### `tablespaceNameInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.tablespaceNameInput"></a>

```typescript
public readonly tablespaceNameInput: string;
```

- *Type:* `string`

---

##### `templateInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.templateInput"></a>

```typescript
public readonly templateInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Database.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `allowConnections`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.allowConnections"></a>

```typescript
public readonly allowConnections: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `connectionLimit`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* `number`

---

##### `encoding`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* `string`

---

##### `isTemplate`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.isTemplate"></a>

```typescript
public readonly isTemplate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `lcCollate`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.lcCollate"></a>

```typescript
public readonly lcCollate: string;
```

- *Type:* `string`

---

##### `lcCtype`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.lcCtype"></a>

```typescript
public readonly lcCtype: string;
```

- *Type:* `string`

---

##### `owner`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* `string`

---

##### `tablespaceName`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.tablespaceName"></a>

```typescript
public readonly tablespaceName: string;
```

- *Type:* `string`

---

##### `template`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Database.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-postgresql.Database.property.tfResourceType"></a>

- *Type:* `string`

---

### DefaultPrivileges <a name="@cdktf/provider-postgresql.DefaultPrivileges"></a>

Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/default_privileges.html postgresql_default_privileges}.

#### Initializers <a name="@cdktf/provider-postgresql.DefaultPrivileges.Initializer"></a>

```typescript
import { DefaultPrivileges } from '@cdktf/provider-postgresql'

new DefaultPrivileges(scope: Construct, id: string, config: DefaultPrivilegesConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.parameter.config"></a>

- *Type:* [`@cdktf/provider-postgresql.DefaultPrivilegesConfig`](#@cdktf/provider-postgresql.DefaultPrivilegesConfig)

---

#### Methods <a name="Methods"></a>

##### `resetSchema` <a name="@cdktf/provider-postgresql.DefaultPrivileges.resetSchema"></a>

```typescript
public resetSchema()
```

##### `resetWithGrantOption` <a name="@cdktf/provider-postgresql.DefaultPrivileges.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `databaseInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* `string`

---

##### `objectTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* `string`

---

##### `ownerInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* `string`

---

##### `privilegesInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.privilegesInput"></a>

```typescript
public readonly privilegesInput: string[];
```

- *Type:* `string`[]

---

##### `roleInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* `string`

---

##### `schemaInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* `string`

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.withGrantOptionInput"></a>

```typescript
public readonly withGrantOptionInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `database`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* `string`

---

##### `objectType`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* `string`

---

##### `owner`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* `string`

---

##### `privileges`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* `string`[]

---

##### `role`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* `string`

---

##### `schema`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* `string`

---

##### `withGrantOption`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.withGrantOption"></a>

```typescript
public readonly withGrantOption: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-postgresql.DefaultPrivileges.property.tfResourceType"></a>

- *Type:* `string`

---

### Extension <a name="@cdktf/provider-postgresql.Extension"></a>

Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html postgresql_extension}.

#### Initializers <a name="@cdktf/provider-postgresql.Extension.Initializer"></a>

```typescript
import { Extension } from '@cdktf/provider-postgresql'

new Extension(scope: Construct, id: string, config: ExtensionConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Extension.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Extension.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Extension.parameter.config"></a>

- *Type:* [`@cdktf/provider-postgresql.ExtensionConfig`](#@cdktf/provider-postgresql.ExtensionConfig)

---

#### Methods <a name="Methods"></a>

##### `resetCreateCascade` <a name="@cdktf/provider-postgresql.Extension.resetCreateCascade"></a>

```typescript
public resetCreateCascade()
```

##### `resetDatabase` <a name="@cdktf/provider-postgresql.Extension.resetDatabase"></a>

```typescript
public resetDatabase()
```

##### `resetDropCascade` <a name="@cdktf/provider-postgresql.Extension.resetDropCascade"></a>

```typescript
public resetDropCascade()
```

##### `resetSchema` <a name="@cdktf/provider-postgresql.Extension.resetSchema"></a>

```typescript
public resetSchema()
```

##### `resetVersion` <a name="@cdktf/provider-postgresql.Extension.resetVersion"></a>

```typescript
public resetVersion()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Extension.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `createCascadeInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Extension.property.createCascadeInput"></a>

```typescript
public readonly createCascadeInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `databaseInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Extension.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* `string`

---

##### `dropCascadeInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Extension.property.dropCascadeInput"></a>

```typescript
public readonly dropCascadeInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Extension.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `schemaInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Extension.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* `string`

---

##### `versionInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Extension.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Extension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `createCascade`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Extension.property.createCascade"></a>

```typescript
public readonly createCascade: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `database`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Extension.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* `string`

---

##### `dropCascade`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Extension.property.dropCascade"></a>

```typescript
public readonly dropCascade: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `schema`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Extension.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* `string`

---

##### `version`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Extension.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-postgresql.Extension.property.tfResourceType"></a>

- *Type:* `string`

---

### Grant <a name="@cdktf/provider-postgresql.Grant"></a>

Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/grant.html postgresql_grant}.

#### Initializers <a name="@cdktf/provider-postgresql.Grant.Initializer"></a>

```typescript
import { Grant } from '@cdktf/provider-postgresql'

new Grant(scope: Construct, id: string, config: GrantConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Grant.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Grant.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Grant.parameter.config"></a>

- *Type:* [`@cdktf/provider-postgresql.GrantConfig`](#@cdktf/provider-postgresql.GrantConfig)

---

#### Methods <a name="Methods"></a>

##### `resetObjects` <a name="@cdktf/provider-postgresql.Grant.resetObjects"></a>

```typescript
public resetObjects()
```

##### `resetSchema` <a name="@cdktf/provider-postgresql.Grant.resetSchema"></a>

```typescript
public resetSchema()
```

##### `resetWithGrantOption` <a name="@cdktf/provider-postgresql.Grant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Grant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `databaseInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Grant.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* `string`

---

##### `objectsInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Grant.property.objectsInput"></a>

```typescript
public readonly objectsInput: string[];
```

- *Type:* `string`[]

---

##### `objectTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Grant.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* `string`

---

##### `privilegesInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Grant.property.privilegesInput"></a>

```typescript
public readonly privilegesInput: string[];
```

- *Type:* `string`[]

---

##### `roleInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Grant.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* `string`

---

##### `schemaInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Grant.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* `string`

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Grant.property.withGrantOptionInput"></a>

```typescript
public readonly withGrantOptionInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `database`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Grant.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* `string`

---

##### `objectType`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Grant.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* `string`

---

##### `privileges`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Grant.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* `string`[]

---

##### `role`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Grant.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* `string`

---

##### `objects`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Grant.property.objects"></a>

```typescript
public readonly objects: string[];
```

- *Type:* `string`[]

---

##### `schema`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Grant.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* `string`

---

##### `withGrantOption`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Grant.property.withGrantOption"></a>

```typescript
public readonly withGrantOption: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-postgresql.Grant.property.tfResourceType"></a>

- *Type:* `string`

---

### GrantRole <a name="@cdktf/provider-postgresql.GrantRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/grant_role.html postgresql_grant_role}.

#### Initializers <a name="@cdktf/provider-postgresql.GrantRole.Initializer"></a>

```typescript
import { GrantRole } from '@cdktf/provider-postgresql'

new GrantRole(scope: Construct, id: string, config: GrantRoleConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-postgresql.GrantRole.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.GrantRole.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-postgresql.GrantRole.parameter.config"></a>

- *Type:* [`@cdktf/provider-postgresql.GrantRoleConfig`](#@cdktf/provider-postgresql.GrantRoleConfig)

---

#### Methods <a name="Methods"></a>

##### `resetWithAdminOption` <a name="@cdktf/provider-postgresql.GrantRole.resetWithAdminOption"></a>

```typescript
public resetWithAdminOption()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.GrantRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `grantRoleInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantRole.property.grantRoleInput"></a>

```typescript
public readonly grantRoleInput: string;
```

- *Type:* `string`

---

##### `roleInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantRole.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* `string`

---

##### `withAdminOptionInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantRole.property.withAdminOptionInput"></a>

```typescript
public readonly withAdminOptionInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `grantRole`<sup>Required</sup> <a name="@cdktf/provider-postgresql.GrantRole.property.grantRole"></a>

```typescript
public readonly grantRole: string;
```

- *Type:* `string`

---

##### `role`<sup>Required</sup> <a name="@cdktf/provider-postgresql.GrantRole.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* `string`

---

##### `withAdminOption`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantRole.property.withAdminOption"></a>

```typescript
public readonly withAdminOption: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-postgresql.GrantRole.property.tfResourceType"></a>

- *Type:* `string`

---

### PhysicalReplicationSlot <a name="@cdktf/provider-postgresql.PhysicalReplicationSlot"></a>

Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/physical_replication_slot.html postgresql_physical_replication_slot}.

#### Initializers <a name="@cdktf/provider-postgresql.PhysicalReplicationSlot.Initializer"></a>

```typescript
import { PhysicalReplicationSlot } from '@cdktf/provider-postgresql'

new PhysicalReplicationSlot(scope: Construct, id: string, config: PhysicalReplicationSlotConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-postgresql.PhysicalReplicationSlot.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.PhysicalReplicationSlot.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-postgresql.PhysicalReplicationSlot.parameter.config"></a>

- *Type:* [`@cdktf/provider-postgresql.PhysicalReplicationSlotConfig`](#@cdktf/provider-postgresql.PhysicalReplicationSlotConfig)

---



#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.PhysicalReplicationSlot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PhysicalReplicationSlot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-postgresql.PhysicalReplicationSlot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-postgresql.PhysicalReplicationSlot.property.tfResourceType"></a>

- *Type:* `string`

---

### PostgresqlProvider <a name="@cdktf/provider-postgresql.PostgresqlProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/postgresql postgresql}.

#### Initializers <a name="@cdktf/provider-postgresql.PostgresqlProvider.Initializer"></a>

```typescript
import { PostgresqlProvider } from '@cdktf/provider-postgresql'

new PostgresqlProvider(scope: Construct, id: string, config?: PostgresqlProviderConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.parameter.config"></a>

- *Type:* [`@cdktf/provider-postgresql.PostgresqlProviderConfig`](#@cdktf/provider-postgresql.PostgresqlProviderConfig)

---

#### Methods <a name="Methods"></a>

##### `resetAlias` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetAlias"></a>

```typescript
public resetAlias()
```

##### `resetClientcert` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetClientcert"></a>

```typescript
public resetClientcert()
```

##### `resetConnectTimeout` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetConnectTimeout"></a>

```typescript
public resetConnectTimeout()
```

##### `resetDatabase` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetDatabase"></a>

```typescript
public resetDatabase()
```

##### `resetDatabaseUsername` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetDatabaseUsername"></a>

```typescript
public resetDatabaseUsername()
```

##### `resetExpectedVersion` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetExpectedVersion"></a>

```typescript
public resetExpectedVersion()
```

##### `resetHost` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetHost"></a>

```typescript
public resetHost()
```

##### `resetMaxConnections` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetMaxConnections"></a>

```typescript
public resetMaxConnections()
```

##### `resetPassword` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetPassword"></a>

```typescript
public resetPassword()
```

##### `resetPort` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetPort"></a>

```typescript
public resetPort()
```

##### `resetScheme` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetScheme"></a>

```typescript
public resetScheme()
```

##### `resetSslmode` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetSslmode"></a>

```typescript
public resetSslmode()
```

##### `resetSslMode` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetSslMode"></a>

```typescript
public resetSslMode()
```

##### `resetSslrootcert` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetSslrootcert"></a>

```typescript
public resetSslrootcert()
```

##### `resetSuperuser` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetSuperuser"></a>

```typescript
public resetSuperuser()
```

##### `resetUsername` <a name="@cdktf/provider-postgresql.PostgresqlProvider.resetUsername"></a>

```typescript
public resetUsername()
```


#### Properties <a name="Properties"></a>

##### `aliasInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* `string`

---

##### `clientcertInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.clientcertInput"></a>

```typescript
public readonly clientcertInput: PostgresqlProviderClientcert;
```

- *Type:* [`@cdktf/provider-postgresql.PostgresqlProviderClientcert`](#@cdktf/provider-postgresql.PostgresqlProviderClientcert)

---

##### `connectTimeoutInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.connectTimeoutInput"></a>

```typescript
public readonly connectTimeoutInput: number;
```

- *Type:* `number`

---

##### `databaseInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* `string`

---

##### `databaseUsernameInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.databaseUsernameInput"></a>

```typescript
public readonly databaseUsernameInput: string;
```

- *Type:* `string`

---

##### `expectedVersionInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.expectedVersionInput"></a>

```typescript
public readonly expectedVersionInput: string;
```

- *Type:* `string`

---

##### `hostInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* `string`

---

##### `maxConnectionsInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.maxConnectionsInput"></a>

```typescript
public readonly maxConnectionsInput: number;
```

- *Type:* `number`

---

##### `passwordInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* `string`

---

##### `portInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* `number`

---

##### `schemeInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* `string`

---

##### `sslmodeInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.sslmodeInput"></a>

```typescript
public readonly sslmodeInput: string;
```

- *Type:* `string`

---

##### `sslModeInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* `string`

---

##### `sslrootcertInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.sslrootcertInput"></a>

```typescript
public readonly sslrootcertInput: string;
```

- *Type:* `string`

---

##### `superuserInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.superuserInput"></a>

```typescript
public readonly superuserInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `usernameInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

---

##### `clientcert`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.clientcert"></a>

```typescript
public readonly clientcert: PostgresqlProviderClientcert;
```

- *Type:* [`@cdktf/provider-postgresql.PostgresqlProviderClientcert`](#@cdktf/provider-postgresql.PostgresqlProviderClientcert)

---

##### `connectTimeout`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* `number`

---

##### `database`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* `string`

---

##### `databaseUsername`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.databaseUsername"></a>

```typescript
public readonly databaseUsername: string;
```

- *Type:* `string`

---

##### `expectedVersion`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.expectedVersion"></a>

```typescript
public readonly expectedVersion: string;
```

- *Type:* `string`

---

##### `host`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* `string`

---

##### `maxConnections`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* `number`

---

##### `password`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* `string`

---

##### `port`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* `number`

---

##### `scheme`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* `string`

---

##### `sslmode`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.sslmode"></a>

```typescript
public readonly sslmode: string;
```

- *Type:* `string`

---

##### `sslMode`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* `string`

---

##### `sslrootcert`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.sslrootcert"></a>

```typescript
public readonly sslrootcert: string;
```

- *Type:* `string`

---

##### `superuser`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.superuser"></a>

```typescript
public readonly superuser: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `username`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-postgresql.PostgresqlProvider.property.tfResourceType"></a>

- *Type:* `string`

---

### ReplicationSlot <a name="@cdktf/provider-postgresql.ReplicationSlot"></a>

Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/replication_slot.html postgresql_replication_slot}.

#### Initializers <a name="@cdktf/provider-postgresql.ReplicationSlot.Initializer"></a>

```typescript
import { ReplicationSlot } from '@cdktf/provider-postgresql'

new ReplicationSlot(scope: Construct, id: string, config: ReplicationSlotConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-postgresql.ReplicationSlot.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.ReplicationSlot.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-postgresql.ReplicationSlot.parameter.config"></a>

- *Type:* [`@cdktf/provider-postgresql.ReplicationSlotConfig`](#@cdktf/provider-postgresql.ReplicationSlotConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDatabase` <a name="@cdktf/provider-postgresql.ReplicationSlot.resetDatabase"></a>

```typescript
public resetDatabase()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.ReplicationSlot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `databaseInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ReplicationSlot.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ReplicationSlot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `pluginInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ReplicationSlot.property.pluginInput"></a>

```typescript
public readonly pluginInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-postgresql.ReplicationSlot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `plugin`<sup>Required</sup> <a name="@cdktf/provider-postgresql.ReplicationSlot.property.plugin"></a>

```typescript
public readonly plugin: string;
```

- *Type:* `string`

---

##### `database`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ReplicationSlot.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-postgresql.ReplicationSlot.property.tfResourceType"></a>

- *Type:* `string`

---

### Role <a name="@cdktf/provider-postgresql.Role"></a>

Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/role.html postgresql_role}.

#### Initializers <a name="@cdktf/provider-postgresql.Role.Initializer"></a>

```typescript
import { Role } from '@cdktf/provider-postgresql'

new Role(scope: Construct, id: string, config: RoleConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Role.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Role.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Role.parameter.config"></a>

- *Type:* [`@cdktf/provider-postgresql.RoleConfig`](#@cdktf/provider-postgresql.RoleConfig)

---

#### Methods <a name="Methods"></a>

##### `resetBypassRowLevelSecurity` <a name="@cdktf/provider-postgresql.Role.resetBypassRowLevelSecurity"></a>

```typescript
public resetBypassRowLevelSecurity()
```

##### `resetConnectionLimit` <a name="@cdktf/provider-postgresql.Role.resetConnectionLimit"></a>

```typescript
public resetConnectionLimit()
```

##### `resetCreateDatabase` <a name="@cdktf/provider-postgresql.Role.resetCreateDatabase"></a>

```typescript
public resetCreateDatabase()
```

##### `resetCreateRole` <a name="@cdktf/provider-postgresql.Role.resetCreateRole"></a>

```typescript
public resetCreateRole()
```

##### `resetEncrypted` <a name="@cdktf/provider-postgresql.Role.resetEncrypted"></a>

```typescript
public resetEncrypted()
```

##### `resetEncryptedPassword` <a name="@cdktf/provider-postgresql.Role.resetEncryptedPassword"></a>

```typescript
public resetEncryptedPassword()
```

##### `resetIdleInTransactionSessionTimeout` <a name="@cdktf/provider-postgresql.Role.resetIdleInTransactionSessionTimeout"></a>

```typescript
public resetIdleInTransactionSessionTimeout()
```

##### `resetInherit` <a name="@cdktf/provider-postgresql.Role.resetInherit"></a>

```typescript
public resetInherit()
```

##### `resetLogin` <a name="@cdktf/provider-postgresql.Role.resetLogin"></a>

```typescript
public resetLogin()
```

##### `resetPassword` <a name="@cdktf/provider-postgresql.Role.resetPassword"></a>

```typescript
public resetPassword()
```

##### `resetReplication` <a name="@cdktf/provider-postgresql.Role.resetReplication"></a>

```typescript
public resetReplication()
```

##### `resetRoles` <a name="@cdktf/provider-postgresql.Role.resetRoles"></a>

```typescript
public resetRoles()
```

##### `resetSearchPath` <a name="@cdktf/provider-postgresql.Role.resetSearchPath"></a>

```typescript
public resetSearchPath()
```

##### `resetSkipDropRole` <a name="@cdktf/provider-postgresql.Role.resetSkipDropRole"></a>

```typescript
public resetSkipDropRole()
```

##### `resetSkipReassignOwned` <a name="@cdktf/provider-postgresql.Role.resetSkipReassignOwned"></a>

```typescript
public resetSkipReassignOwned()
```

##### `resetStatementTimeout` <a name="@cdktf/provider-postgresql.Role.resetStatementTimeout"></a>

```typescript
public resetStatementTimeout()
```

##### `resetSuperuser` <a name="@cdktf/provider-postgresql.Role.resetSuperuser"></a>

```typescript
public resetSuperuser()
```

##### `resetValidUntil` <a name="@cdktf/provider-postgresql.Role.resetValidUntil"></a>

```typescript
public resetValidUntil()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Role.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `bypassRowLevelSecurityInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.bypassRowLevelSecurityInput"></a>

```typescript
public readonly bypassRowLevelSecurityInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `connectionLimitInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.connectionLimitInput"></a>

```typescript
public readonly connectionLimitInput: number;
```

- *Type:* `number`

---

##### `createDatabaseInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.createDatabaseInput"></a>

```typescript
public readonly createDatabaseInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `createRoleInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.createRoleInput"></a>

```typescript
public readonly createRoleInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `encryptedInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: string;
```

- *Type:* `string`

---

##### `encryptedPasswordInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.encryptedPasswordInput"></a>

```typescript
public readonly encryptedPasswordInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idleInTransactionSessionTimeoutInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.idleInTransactionSessionTimeoutInput"></a>

```typescript
public readonly idleInTransactionSessionTimeoutInput: number;
```

- *Type:* `number`

---

##### `inheritInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.inheritInput"></a>

```typescript
public readonly inheritInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `loginInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.loginInput"></a>

```typescript
public readonly loginInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `passwordInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* `string`

---

##### `replicationInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.replicationInput"></a>

```typescript
public readonly replicationInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `rolesInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* `string`[]

---

##### `searchPathInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.searchPathInput"></a>

```typescript
public readonly searchPathInput: string[];
```

- *Type:* `string`[]

---

##### `skipDropRoleInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.skipDropRoleInput"></a>

```typescript
public readonly skipDropRoleInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `skipReassignOwnedInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.skipReassignOwnedInput"></a>

```typescript
public readonly skipReassignOwnedInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `statementTimeoutInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.statementTimeoutInput"></a>

```typescript
public readonly statementTimeoutInput: number;
```

- *Type:* `number`

---

##### `superuserInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.superuserInput"></a>

```typescript
public readonly superuserInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `validUntilInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.validUntilInput"></a>

```typescript
public readonly validUntilInput: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Role.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `bypassRowLevelSecurity`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.bypassRowLevelSecurity"></a>

```typescript
public readonly bypassRowLevelSecurity: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `connectionLimit`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* `number`

---

##### `createDatabase`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.createDatabase"></a>

```typescript
public readonly createDatabase: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `createRole`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.createRole"></a>

```typescript
public readonly createRole: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `encrypted`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.encrypted"></a>

```typescript
public readonly encrypted: string;
```

- *Type:* `string`

---

##### `encryptedPassword`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.encryptedPassword"></a>

```typescript
public readonly encryptedPassword: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idleInTransactionSessionTimeout`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.idleInTransactionSessionTimeout"></a>

```typescript
public readonly idleInTransactionSessionTimeout: number;
```

- *Type:* `number`

---

##### `inherit`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.inherit"></a>

```typescript
public readonly inherit: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `login`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.login"></a>

```typescript
public readonly login: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `password`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* `string`

---

##### `replication`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.replication"></a>

```typescript
public readonly replication: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `roles`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* `string`[]

---

##### `searchPath`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.searchPath"></a>

```typescript
public readonly searchPath: string[];
```

- *Type:* `string`[]

---

##### `skipDropRole`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.skipDropRole"></a>

```typescript
public readonly skipDropRole: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `skipReassignOwned`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.skipReassignOwned"></a>

```typescript
public readonly skipReassignOwned: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `statementTimeout`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.statementTimeout"></a>

```typescript
public readonly statementTimeout: number;
```

- *Type:* `number`

---

##### `superuser`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.superuser"></a>

```typescript
public readonly superuser: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `validUntil`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Role.property.validUntil"></a>

```typescript
public readonly validUntil: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-postgresql.Role.property.tfResourceType"></a>

- *Type:* `string`

---

### Schema <a name="@cdktf/provider-postgresql.Schema"></a>

Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/schema.html postgresql_schema}.

#### Initializers <a name="@cdktf/provider-postgresql.Schema.Initializer"></a>

```typescript
import { Schema } from '@cdktf/provider-postgresql'

new Schema(scope: Construct, id: string, config: SchemaConfig)
```

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Schema.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Schema.parameter.id"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Schema.parameter.config"></a>

- *Type:* [`@cdktf/provider-postgresql.SchemaConfig`](#@cdktf/provider-postgresql.SchemaConfig)

---

#### Methods <a name="Methods"></a>

##### `resetDatabase` <a name="@cdktf/provider-postgresql.Schema.resetDatabase"></a>

```typescript
public resetDatabase()
```

##### `resetDropCascade` <a name="@cdktf/provider-postgresql.Schema.resetDropCascade"></a>

```typescript
public resetDropCascade()
```

##### `resetIfNotExists` <a name="@cdktf/provider-postgresql.Schema.resetIfNotExists"></a>

```typescript
public resetIfNotExists()
```

##### `resetOwner` <a name="@cdktf/provider-postgresql.Schema.resetOwner"></a>

```typescript
public resetOwner()
```

##### `resetPolicy` <a name="@cdktf/provider-postgresql.Schema.resetPolicy"></a>

```typescript
public resetPolicy()
```


#### Properties <a name="Properties"></a>

##### `id`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Schema.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `databaseInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Schema.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* `string`

---

##### `dropCascadeInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Schema.property.dropCascadeInput"></a>

```typescript
public readonly dropCascadeInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `ifNotExistsInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Schema.property.ifNotExistsInput"></a>

```typescript
public readonly ifNotExistsInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Schema.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `ownerInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Schema.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* `string`

---

##### `policyInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Schema.property.policyInput"></a>

```typescript
public readonly policyInput: SchemaPolicy[];
```

- *Type:* [`@cdktf/provider-postgresql.SchemaPolicy`](#@cdktf/provider-postgresql.SchemaPolicy)[]

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-postgresql.Schema.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `database`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Schema.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* `string`

---

##### `dropCascade`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Schema.property.dropCascade"></a>

```typescript
public readonly dropCascade: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `ifNotExists`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Schema.property.ifNotExists"></a>

```typescript
public readonly ifNotExists: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `owner`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Schema.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* `string`

---

##### `policy`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.Schema.property.policy"></a>

```typescript
public readonly policy: SchemaPolicy[];
```

- *Type:* [`@cdktf/provider-postgresql.SchemaPolicy`](#@cdktf/provider-postgresql.SchemaPolicy)[]

---

#### Constants <a name="Constants"></a>

##### `tfResourceType` <a name="@cdktf/provider-postgresql.Schema.property.tfResourceType"></a>

- *Type:* `string`

---

## Structs <a name="Structs"></a>

### DatabaseConfig <a name="@cdktf/provider-postgresql.DatabaseConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DatabaseConfig } from '@cdktf/provider-postgresql'

const databaseConfig: DatabaseConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The PostgreSQL database name to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#name Database#name}

---

##### `allowConnections`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.allowConnections"></a>

```typescript
public readonly allowConnections: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If false then no one can connect to this database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#allow_connections Database#allow_connections}

---

##### `connectionLimit`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* `number`

How many concurrent connections can be made to this database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#connection_limit Database#connection_limit}

---

##### `encoding`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.encoding"></a>

```typescript
public readonly encoding: string;
```

- *Type:* `string`

Character set encoding to use in the new database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#encoding Database#encoding}

---

##### `isTemplate`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.isTemplate"></a>

```typescript
public readonly isTemplate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If true, then this database can be cloned by any user with CREATEDB privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#is_template Database#is_template}

---

##### `lcCollate`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.lcCollate"></a>

```typescript
public readonly lcCollate: string;
```

- *Type:* `string`

Collation order (LC_COLLATE) to use in the new database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#lc_collate Database#lc_collate}

---

##### `lcCtype`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.lcCtype"></a>

```typescript
public readonly lcCtype: string;
```

- *Type:* `string`

Character classification (LC_CTYPE) to use in the new database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#lc_ctype Database#lc_ctype}

---

##### `owner`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* `string`

The ROLE which owns the database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#owner Database#owner}

---

##### `tablespaceName`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.tablespaceName"></a>

```typescript
public readonly tablespaceName: string;
```

- *Type:* `string`

The name of the tablespace that will be associated with the new database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#tablespace_name Database#tablespace_name}

---

##### `template`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DatabaseConfig.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* `string`

The name of the template from which to create the new database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/database.html#template Database#template}

---

### DefaultPrivilegesConfig <a name="@cdktf/provider-postgresql.DefaultPrivilegesConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DefaultPrivilegesConfig } from '@cdktf/provider-postgresql'

const defaultPrivilegesConfig: DefaultPrivilegesConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivilegesConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivilegesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivilegesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivilegesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivilegesConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* `string`

The database to grant default privileges for this role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/default_privileges.html#database DefaultPrivileges#database}

---

##### `objectType`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivilegesConfig.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* `string`

The PostgreSQL object type to set the default privileges on (one of: table, sequence, function, type).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/default_privileges.html#object_type DefaultPrivileges#object_type}

---

##### `owner`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivilegesConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* `string`

Target role for which to alter default privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/default_privileges.html#owner DefaultPrivileges#owner}

---

##### `privileges`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivilegesConfig.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* `string`[]

The list of privileges to apply as default privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/default_privileges.html#privileges DefaultPrivileges#privileges}

---

##### `role`<sup>Required</sup> <a name="@cdktf/provider-postgresql.DefaultPrivilegesConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* `string`

The name of the role to which grant default privileges on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/default_privileges.html#role DefaultPrivileges#role}

---

##### `schema`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivilegesConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* `string`

The database schema to set default privileges for this role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/default_privileges.html#schema DefaultPrivileges#schema}

---

##### `withGrantOption`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.DefaultPrivilegesConfig.property.withGrantOption"></a>

```typescript
public readonly withGrantOption: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/default_privileges.html#with_grant_option DefaultPrivileges#with_grant_option}

---

### ExtensionConfig <a name="@cdktf/provider-postgresql.ExtensionConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ExtensionConfig } from '@cdktf/provider-postgresql'

const extensionConfig: ExtensionConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ExtensionConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ExtensionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ExtensionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ExtensionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-postgresql.ExtensionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html#name Extension#name}.

---

##### `createCascade`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ExtensionConfig.property.createCascade"></a>

```typescript
public readonly createCascade: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

When true, will also create any extensions that this extension depends on that are not already installed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html#create_cascade Extension#create_cascade}

---

##### `database`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ExtensionConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* `string`

Sets the database to add the extension to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html#database Extension#database}

---

##### `dropCascade`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ExtensionConfig.property.dropCascade"></a>

```typescript
public readonly dropCascade: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

When true, will also drop all the objects that depend on the extension, and in turn all objects that depend on those objects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html#drop_cascade Extension#drop_cascade}

---

##### `schema`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ExtensionConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* `string`

Sets the schema of an extension.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html#schema Extension#schema}

---

##### `version`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ExtensionConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

Sets the version number of the extension.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/extension.html#version Extension#version}

---

### GrantConfig <a name="@cdktf/provider-postgresql.GrantConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { GrantConfig } from '@cdktf/provider-postgresql'

const grantConfig: GrantConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `database`<sup>Required</sup> <a name="@cdktf/provider-postgresql.GrantConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* `string`

The database to grant privileges on for this role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/grant.html#database Grant#database}

---

##### `objectType`<sup>Required</sup> <a name="@cdktf/provider-postgresql.GrantConfig.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* `string`

The PostgreSQL object type to grant the privileges on (one of: database, function, schema, sequence, table, foreign_data_wrapper, foreign_server).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/grant.html#object_type Grant#object_type}

---

##### `privileges`<sup>Required</sup> <a name="@cdktf/provider-postgresql.GrantConfig.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* `string`[]

The list of privileges to grant.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/grant.html#privileges Grant#privileges}

---

##### `role`<sup>Required</sup> <a name="@cdktf/provider-postgresql.GrantConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* `string`

The name of the role to grant privileges on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/grant.html#role Grant#role}

---

##### `objects`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantConfig.property.objects"></a>

```typescript
public readonly objects: string[];
```

- *Type:* `string`[]

The specific objects to grant privileges on for this role (empty means all objects of the requested type).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/grant.html#objects Grant#objects}

---

##### `schema`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* `string`

The database schema to grant privileges on for this role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/grant.html#schema Grant#schema}

---

##### `withGrantOption`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantConfig.property.withGrantOption"></a>

```typescript
public readonly withGrantOption: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/grant.html#with_grant_option Grant#with_grant_option}

---

### GrantRoleConfig <a name="@cdktf/provider-postgresql.GrantRoleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { GrantRoleConfig } from '@cdktf/provider-postgresql'

const grantRoleConfig: GrantRoleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantRoleConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `grantRole`<sup>Required</sup> <a name="@cdktf/provider-postgresql.GrantRoleConfig.property.grantRole"></a>

```typescript
public readonly grantRole: string;
```

- *Type:* `string`

The name of the role that is granted to role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/grant_role.html#grant_role GrantRole#grant_role}

---

##### `role`<sup>Required</sup> <a name="@cdktf/provider-postgresql.GrantRoleConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* `string`

The name of the role to grant grant_role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/grant_role.html#role GrantRole#role}

---

##### `withAdminOption`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.GrantRoleConfig.property.withAdminOption"></a>

```typescript
public readonly withAdminOption: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/grant_role.html#with_admin_option GrantRole#with_admin_option}

---

### PhysicalReplicationSlotConfig <a name="@cdktf/provider-postgresql.PhysicalReplicationSlotConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PhysicalReplicationSlotConfig } from '@cdktf/provider-postgresql'

const physicalReplicationSlotConfig: PhysicalReplicationSlotConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PhysicalReplicationSlotConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PhysicalReplicationSlotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PhysicalReplicationSlotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PhysicalReplicationSlotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-postgresql.PhysicalReplicationSlotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/physical_replication_slot.html#name PhysicalReplicationSlot#name}.

---

### PostgresqlProviderClientcert <a name="@cdktf/provider-postgresql.PostgresqlProviderClientcert"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PostgresqlProviderClientcert } from '@cdktf/provider-postgresql'

const postgresqlProviderClientcert: PostgresqlProviderClientcert = { ... }
```

##### `cert`<sup>Required</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderClientcert.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* `string`

The SSL client certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#cert PostgresqlProvider#cert}

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderClientcert.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

The SSL client certificate private key file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#key PostgresqlProvider#key}

---

### PostgresqlProviderConfig <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PostgresqlProviderConfig } from '@cdktf/provider-postgresql'

const postgresqlProviderConfig: PostgresqlProviderConfig = { ... }
```

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#alias PostgresqlProvider#alias}

---

##### `clientcert`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.clientcert"></a>

```typescript
public readonly clientcert: PostgresqlProviderClientcert;
```

- *Type:* [`@cdktf/provider-postgresql.PostgresqlProviderClientcert`](#@cdktf/provider-postgresql.PostgresqlProviderClientcert)

clientcert block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#clientcert PostgresqlProvider#clientcert}

---

##### `connectTimeout`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.connectTimeout"></a>

```typescript
public readonly connectTimeout: number;
```

- *Type:* `number`

Maximum wait for connection, in seconds. Zero or not specified means wait indefinitely.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#connect_timeout PostgresqlProvider#connect_timeout}

---

##### `database`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* `string`

The name of the database to connect to in order to conenct to (defaults to `postgres`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#database PostgresqlProvider#database}

---

##### `databaseUsername`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.databaseUsername"></a>

```typescript
public readonly databaseUsername: string;
```

- *Type:* `string`

Database username associated to the connected user (for user name maps).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#database_username PostgresqlProvider#database_username}

---

##### `expectedVersion`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.expectedVersion"></a>

```typescript
public readonly expectedVersion: string;
```

- *Type:* `string`

Specify the expected version of PostgreSQL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#expected_version PostgresqlProvider#expected_version}

---

##### `host`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* `string`

Name of PostgreSQL server address to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#host PostgresqlProvider#host}

---

##### `maxConnections`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* `number`

Maximum number of connections to establish to the database. Zero means unlimited.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#max_connections PostgresqlProvider#max_connections}

---

##### `password`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* `string`

Password to be used if the PostgreSQL server demands password authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#password PostgresqlProvider#password}

---

##### `port`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* `number`

The PostgreSQL port number to connect to at the server host, or socket file name extension for Unix-domain connections.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#port PostgresqlProvider#port}

---

##### `scheme`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#scheme PostgresqlProvider#scheme}.

---

##### `sslmode`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.sslmode"></a>

```typescript
public readonly sslmode: string;
```

- *Type:* `string`

This option determines whether or with what priority a secure SSL TCP/IP connection will be negotiated with the PostgreSQL server.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#sslmode PostgresqlProvider#sslmode}

---

##### `sslMode`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#ssl_mode PostgresqlProvider#ssl_mode}.

---

##### `sslrootcert`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.sslrootcert"></a>

```typescript
public readonly sslrootcert: string;
```

- *Type:* `string`

The SSL server root certificate file path. The file must contain PEM encoded data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#sslrootcert PostgresqlProvider#sslrootcert}

---

##### `superuser`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.superuser"></a>

```typescript
public readonly superuser: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Specify if the user to connect as is a Postgres superuser or not.If not, some feature might be disabled (e.g.: Refreshing state password from Postgres).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#superuser PostgresqlProvider#superuser}

---

##### `username`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* `string`

PostgreSQL user name to connect as.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql#username PostgresqlProvider#username}

---

### ReplicationSlotConfig <a name="@cdktf/provider-postgresql.ReplicationSlotConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ReplicationSlotConfig } from '@cdktf/provider-postgresql'

const replicationSlotConfig: ReplicationSlotConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ReplicationSlotConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ReplicationSlotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ReplicationSlotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ReplicationSlotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-postgresql.ReplicationSlotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/replication_slot.html#name ReplicationSlot#name}.

---

##### `plugin`<sup>Required</sup> <a name="@cdktf/provider-postgresql.ReplicationSlotConfig.property.plugin"></a>

```typescript
public readonly plugin: string;
```

- *Type:* `string`

Sets the output plugin to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/replication_slot.html#plugin ReplicationSlot#plugin}

---

##### `database`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.ReplicationSlotConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* `string`

Sets the database to add the replication slot to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/replication_slot.html#database ReplicationSlot#database}

---

### RoleConfig <a name="@cdktf/provider-postgresql.RoleConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RoleConfig } from '@cdktf/provider-postgresql'

const roleConfig: RoleConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#name Role#name}

---

##### `bypassRowLevelSecurity`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.bypassRowLevelSecurity"></a>

```typescript
public readonly bypassRowLevelSecurity: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Determine whether a role bypasses every row-level security (RLS) policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#bypass_row_level_security Role#bypass_row_level_security}

---

##### `connectionLimit`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* `number`

How many concurrent connections can be made with this role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#connection_limit Role#connection_limit}

---

##### `createDatabase`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.createDatabase"></a>

```typescript
public readonly createDatabase: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Define a role's ability to create databases.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#create_database Role#create_database}

---

##### `createRole`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.createRole"></a>

```typescript
public readonly createRole: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Determine whether this role will be permitted to create new roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#create_role Role#create_role}

---

##### `encrypted`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.encrypted"></a>

```typescript
public readonly encrypted: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#encrypted Role#encrypted}.

---

##### `encryptedPassword`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.encryptedPassword"></a>

```typescript
public readonly encryptedPassword: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Control whether the password is stored encrypted in the system catalogs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#encrypted_password Role#encrypted_password}

---

##### `idleInTransactionSessionTimeout`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.idleInTransactionSessionTimeout"></a>

```typescript
public readonly idleInTransactionSessionTimeout: number;
```

- *Type:* `number`

Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#idle_in_transaction_session_timeout Role#idle_in_transaction_session_timeout}

---

##### `inherit`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.inherit"></a>

```typescript
public readonly inherit: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Determine whether a role "inherits" the privileges of roles it is a member of.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#inherit Role#inherit}

---

##### `login`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.login"></a>

```typescript
public readonly login: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Determine whether a role is allowed to log in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#login Role#login}

---

##### `password`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* `string`

Sets the role's password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#password Role#password}

---

##### `replication`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.replication"></a>

```typescript
public readonly replication: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#replication Role#replication}

---

##### `roles`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* `string`[]

Role(s) to grant to this new role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#roles Role#roles}

---

##### `searchPath`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.searchPath"></a>

```typescript
public readonly searchPath: string[];
```

- *Type:* `string`[]

Sets the role's search path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#search_path Role#search_path}

---

##### `skipDropRole`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.skipDropRole"></a>

```typescript
public readonly skipDropRole: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#skip_drop_role Role#skip_drop_role}

---

##### `skipReassignOwned`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.skipReassignOwned"></a>

```typescript
public readonly skipReassignOwned: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#skip_reassign_owned Role#skip_reassign_owned}

---

##### `statementTimeout`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.statementTimeout"></a>

```typescript
public readonly statementTimeout: number;
```

- *Type:* `number`

Abort any statement that takes more than the specified number of milliseconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#statement_timeout Role#statement_timeout}

---

##### `superuser`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.superuser"></a>

```typescript
public readonly superuser: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Determine whether the new role is a "superuser".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#superuser Role#superuser}

---

##### `validUntil`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.RoleConfig.property.validUntil"></a>

```typescript
public readonly validUntil: string;
```

- *Type:* `string`

Sets a date and time after which the role's password is no longer valid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#valid_until Role#valid_until}

---

### SchemaConfig <a name="@cdktf/provider-postgresql.SchemaConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SchemaConfig } from '@cdktf/provider-postgresql'

const schemaConfig: SchemaConfig = { ... }
```

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaConfig.property.count"></a>

```typescript
public readonly count: number | IResolvable;
```

- *Type:* `number` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-postgresql.SchemaConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema.html#name Schema#name}

---

##### `database`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* `string`

The database name to alter schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema.html#database Schema#database}

---

##### `dropCascade`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaConfig.property.dropCascade"></a>

```typescript
public readonly dropCascade: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

When true, will also drop all the objects that are contained in the schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema.html#drop_cascade Schema#drop_cascade}

---

##### `ifNotExists`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaConfig.property.ifNotExists"></a>

```typescript
public readonly ifNotExists: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

When true, use the existing schema if it exists.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema.html#if_not_exists Schema#if_not_exists}

---

##### `owner`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* `string`

The ROLE name who owns the schema.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema.html#owner Schema#owner}

---

##### `policy`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaConfig.property.policy"></a>

```typescript
public readonly policy: SchemaPolicy[];
```

- *Type:* [`@cdktf/provider-postgresql.SchemaPolicy`](#@cdktf/provider-postgresql.SchemaPolicy)[]

policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema.html#policy Schema#policy}

---

### SchemaPolicy <a name="@cdktf/provider-postgresql.SchemaPolicy"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { SchemaPolicy } from '@cdktf/provider-postgresql'

const schemaPolicy: SchemaPolicy = { ... }
```

##### `create`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaPolicy.property.create"></a>

```typescript
public readonly create: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If true, allow the specified ROLEs to CREATE new objects within the schema(s).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema.html#create Schema#create}

---

##### `createWithGrant`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaPolicy.property.createWithGrant"></a>

```typescript
public readonly createWithGrant: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If true, allow the specified ROLEs to CREATE new objects within the schema(s) and GRANT the same CREATE privilege to different ROLEs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema.html#create_with_grant Schema#create_with_grant}

---

##### `role`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaPolicy.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* `string`

ROLE who will receive this policy (default: PUBLIC).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema.html#role Schema#role}

---

##### `usage`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaPolicy.property.usage"></a>

```typescript
public readonly usage: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If true, allow the specified ROLEs to use objects within the schema(s).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema.html#usage Schema#usage}

---

##### `usageWithGrant`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.SchemaPolicy.property.usageWithGrant"></a>

```typescript
public readonly usageWithGrant: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

If true, allow the specified ROLEs to use objects within the schema(s) and GRANT the same USAGE privilege to different ROLEs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/schema.html#usage_with_grant Schema#usage_with_grant}

---

## Classes <a name="Classes"></a>

### PostgresqlProviderClientcertOutputReference <a name="@cdktf/provider-postgresql.PostgresqlProviderClientcertOutputReference"></a>

#### Initializers <a name="@cdktf/provider-postgresql.PostgresqlProviderClientcertOutputReference.Initializer"></a>

```typescript
import { PostgresqlProviderClientcertOutputReference } from '@cdktf/provider-postgresql'

new PostgresqlProviderClientcertOutputReference(terraformResource: ITerraformResource, terraformAttribute: string, isSingleItem: boolean)
```

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderClientcertOutputReference.parameter.terraformResource"></a>

- *Type:* [`cdktf.ITerraformResource`](#cdktf.ITerraformResource)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderClientcertOutputReference.parameter.terraformAttribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `isSingleItem`<sup>Required</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderClientcertOutputReference.parameter.isSingleItem"></a>

- *Type:* `boolean`

True if this is a block, false if it's a list.

---



#### Properties <a name="Properties"></a>

##### `certInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderClientcertOutputReference.property.certInput"></a>

```typescript
public readonly certInput: string;
```

- *Type:* `string`

---

##### `keyInput`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderClientcertOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* `string`

---

##### `cert`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderClientcertOutputReference.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* `string`

---

##### `key`<sup>Optional</sup> <a name="@cdktf/provider-postgresql.PostgresqlProviderClientcertOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---



