# `postgresql_default_privileges`

Refer to the Terraform Registory for docs: [`postgresql_default_privileges`](https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges).

# `defaultPrivileges` Submodule <a name="`defaultPrivileges` Submodule" id="@cdktf/provider-postgresql.defaultPrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultPrivileges <a name="DefaultPrivileges" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges postgresql_default_privileges}.

#### Initializers <a name="Initializers" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import default_privileges

defaultPrivileges.DefaultPrivileges(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  object_type: str,
  owner: str,
  privileges: typing.List[str],
  role: str,
  id: str = None,
  schema: str = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.database">database</a></code> | <code>str</code> | The database to grant default privileges for this role. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.objectType">object_type</a></code> | <code>str</code> | The PostgreSQL object type to set the default privileges on (one of: table, sequence, function, type, schema). |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Target role for which to alter default privileges. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.privileges">privileges</a></code> | <code>typing.List[str]</code> | The list of privileges to apply as default privileges. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.role">role</a></code> | <code>str</code> | The name of the role to which grant default privileges on. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#id DefaultPrivileges#id}. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The database schema to set default privileges for this role. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Permit the grant recipient to grant it to others. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.database"></a>

- *Type:* str

The database to grant default privileges for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#database DefaultPrivileges#database}

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.objectType"></a>

- *Type:* str

The PostgreSQL object type to set the default privileges on (one of: table, sequence, function, type, schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#object_type DefaultPrivileges#object_type}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.owner"></a>

- *Type:* str

Target role for which to alter default privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#owner DefaultPrivileges#owner}

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.privileges"></a>

- *Type:* typing.List[str]

The list of privileges to apply as default privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#privileges DefaultPrivileges#privileges}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.role"></a>

- *Type:* str

The name of the role to which grant default privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#role DefaultPrivileges#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#id DefaultPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.schema"></a>

- *Type:* str

The database schema to set default privileges for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#schema DefaultPrivileges#schema}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.Initializer.parameter.withGrantOption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#with_grant_option DefaultPrivileges#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetWithGrantOption">reset_with_grant_option</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_with_grant_option` <a name="reset_with_grant_option" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.resetWithGrantOption"></a>

```python
def reset_with_grant_option() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isConstruct"></a>

```python
from cdktf_cdktf_provider_postgresql import default_privileges

defaultPrivileges.DefaultPrivileges.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_postgresql import default_privileges

defaultPrivileges.DefaultPrivileges.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_postgresql import default_privileges

defaultPrivileges.DefaultPrivileges.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privilegesInput">privileges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOptionInput">with_grant_option_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `privileges_input`<sup>Optional</sup> <a name="privileges_input" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privilegesInput"></a>

```python
privileges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `with_grant_option_input`<sup>Optional</sup> <a name="with_grant_option_input" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOptionInput"></a>

```python
with_grant_option_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `with_grant_option`<sup>Required</sup> <a name="with_grant_option" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivileges.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultPrivilegesConfig <a name="DefaultPrivilegesConfig" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_postgresql import default_privileges

defaultPrivileges.DefaultPrivilegesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  object_type: str,
  owner: str,
  privileges: typing.List[str],
  role: str,
  id: str = None,
  schema: str = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.database">database</a></code> | <code>str</code> | The database to grant default privileges for this role. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.objectType">object_type</a></code> | <code>str</code> | The PostgreSQL object type to set the default privileges on (one of: table, sequence, function, type, schema). |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.owner">owner</a></code> | <code>str</code> | Target role for which to alter default privileges. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | The list of privileges to apply as default privileges. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.role">role</a></code> | <code>str</code> | The name of the role to which grant default privileges on. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#id DefaultPrivileges#id}. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.schema">schema</a></code> | <code>str</code> | The database schema to set default privileges for this role. |
| <code><a href="#@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Permit the grant recipient to grant it to others. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database to grant default privileges for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#database DefaultPrivileges#database}

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

The PostgreSQL object type to set the default privileges on (one of: table, sequence, function, type, schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#object_type DefaultPrivileges#object_type}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Target role for which to alter default privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#owner DefaultPrivileges#owner}

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

The list of privileges to apply as default privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#privileges DefaultPrivileges#privileges}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.role"></a>

```python
role: str
```

- *Type:* str

The name of the role to which grant default privileges on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#role DefaultPrivileges#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#id DefaultPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The database schema to set default privileges for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#schema DefaultPrivileges#schema}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-postgresql.defaultPrivileges.DefaultPrivilegesConfig.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Permit the grant recipient to grant it to others.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/postgresql/1.19.0/docs/resources/default_privileges#with_grant_option DefaultPrivileges#with_grant_option}

---



