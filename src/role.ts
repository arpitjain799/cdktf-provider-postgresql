// https://www.terraform.io/docs/providers/postgresql/r/role.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determine whether a role bypasses every row-level security (RLS) policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#bypass_row_level_security Role#bypass_row_level_security}
  */
  readonly bypassRowLevelSecurity?: boolean | cdktf.IResolvable;
  /**
  * How many concurrent connections can be made with this role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#connection_limit Role#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Define a role's ability to create databases
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#create_database Role#create_database}
  */
  readonly createDatabase?: boolean | cdktf.IResolvable;
  /**
  * Determine whether this role will be permitted to create new roles
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#create_role Role#create_role}
  */
  readonly createRole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#encrypted Role#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Control whether the password is stored encrypted in the system catalogs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#encrypted_password Role#encrypted_password}
  */
  readonly encryptedPassword?: boolean | cdktf.IResolvable;
  /**
  * Terminate any session with an open transaction that has been idle for longer than the specified duration in milliseconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#idle_in_transaction_session_timeout Role#idle_in_transaction_session_timeout}
  */
  readonly idleInTransactionSessionTimeout?: number;
  /**
  * Determine whether a role "inherits" the privileges of roles it is a member of
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#inherit Role#inherit}
  */
  readonly inherit?: boolean | cdktf.IResolvable;
  /**
  * Determine whether a role is allowed to log in
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#login Role#login}
  */
  readonly login?: boolean | cdktf.IResolvable;
  /**
  * The name of the role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#name Role#name}
  */
  readonly name: string;
  /**
  * Sets the role's password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#password Role#password}
  */
  readonly password?: string;
  /**
  * Determine whether a role is allowed to initiate streaming replication or put the system in and out of backup mode
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#replication Role#replication}
  */
  readonly replication?: boolean | cdktf.IResolvable;
  /**
  * Role(s) to grant to this new role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#roles Role#roles}
  */
  readonly roles?: string[];
  /**
  * Sets the role's search path
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#search_path Role#search_path}
  */
  readonly searchPath?: string[];
  /**
  * Skip actually running the DROP ROLE command when removing a ROLE from PostgreSQL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#skip_drop_role Role#skip_drop_role}
  */
  readonly skipDropRole?: boolean | cdktf.IResolvable;
  /**
  * Skip actually running the REASSIGN OWNED command when removing a role from PostgreSQL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#skip_reassign_owned Role#skip_reassign_owned}
  */
  readonly skipReassignOwned?: boolean | cdktf.IResolvable;
  /**
  * Abort any statement that takes more than the specified number of milliseconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#statement_timeout Role#statement_timeout}
  */
  readonly statementTimeout?: number;
  /**
  * Determine whether the new role is a "superuser"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#superuser Role#superuser}
  */
  readonly superuser?: boolean | cdktf.IResolvable;
  /**
  * Sets a date and time after which the role's password is no longer valid
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/postgresql/r/role.html#valid_until Role#valid_until}
  */
  readonly validUntil?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/postgresql/r/role.html postgresql_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "postgresql_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/postgresql/r/role.html postgresql_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'postgresql_role',
      terraformGeneratorMetadata: {
        providerName: 'postgresql'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bypassRowLevelSecurity = config.bypassRowLevelSecurity;
    this._connectionLimit = config.connectionLimit;
    this._createDatabase = config.createDatabase;
    this._createRole = config.createRole;
    this._encrypted = config.encrypted;
    this._encryptedPassword = config.encryptedPassword;
    this._idleInTransactionSessionTimeout = config.idleInTransactionSessionTimeout;
    this._inherit = config.inherit;
    this._login = config.login;
    this._name = config.name;
    this._password = config.password;
    this._replication = config.replication;
    this._roles = config.roles;
    this._searchPath = config.searchPath;
    this._skipDropRole = config.skipDropRole;
    this._skipReassignOwned = config.skipReassignOwned;
    this._statementTimeout = config.statementTimeout;
    this._superuser = config.superuser;
    this._validUntil = config.validUntil;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_row_level_security - computed: false, optional: true, required: false
  private _bypassRowLevelSecurity?: boolean | cdktf.IResolvable | undefined; 
  public get bypassRowLevelSecurity() {
    return this.getBooleanAttribute('bypass_row_level_security') as any;
  }
  public set bypassRowLevelSecurity(value: boolean | cdktf.IResolvable | undefined) {
    this._bypassRowLevelSecurity = value;
  }
  public resetBypassRowLevelSecurity() {
    this._bypassRowLevelSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassRowLevelSecurityInput() {
    return this._bypassRowLevelSecurity
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: number | undefined; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number | undefined) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit
  }

  // create_database - computed: false, optional: true, required: false
  private _createDatabase?: boolean | cdktf.IResolvable | undefined; 
  public get createDatabase() {
    return this.getBooleanAttribute('create_database') as any;
  }
  public set createDatabase(value: boolean | cdktf.IResolvable | undefined) {
    this._createDatabase = value;
  }
  public resetCreateDatabase() {
    this._createDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDatabaseInput() {
    return this._createDatabase
  }

  // create_role - computed: false, optional: true, required: false
  private _createRole?: boolean | cdktf.IResolvable | undefined; 
  public get createRole() {
    return this.getBooleanAttribute('create_role') as any;
  }
  public set createRole(value: boolean | cdktf.IResolvable | undefined) {
    this._createRole = value;
  }
  public resetCreateRole() {
    this._createRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createRoleInput() {
    return this._createRole
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: string | undefined; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string | undefined) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted
  }

  // encrypted_password - computed: false, optional: true, required: false
  private _encryptedPassword?: boolean | cdktf.IResolvable | undefined; 
  public get encryptedPassword() {
    return this.getBooleanAttribute('encrypted_password') as any;
  }
  public set encryptedPassword(value: boolean | cdktf.IResolvable | undefined) {
    this._encryptedPassword = value;
  }
  public resetEncryptedPassword() {
    this._encryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPasswordInput() {
    return this._encryptedPassword
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_in_transaction_session_timeout - computed: false, optional: true, required: false
  private _idleInTransactionSessionTimeout?: number | undefined; 
  public get idleInTransactionSessionTimeout() {
    return this.getNumberAttribute('idle_in_transaction_session_timeout');
  }
  public set idleInTransactionSessionTimeout(value: number | undefined) {
    this._idleInTransactionSessionTimeout = value;
  }
  public resetIdleInTransactionSessionTimeout() {
    this._idleInTransactionSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInTransactionSessionTimeoutInput() {
    return this._idleInTransactionSessionTimeout
  }

  // inherit - computed: false, optional: true, required: false
  private _inherit?: boolean | cdktf.IResolvable | undefined; 
  public get inherit() {
    return this.getBooleanAttribute('inherit') as any;
  }
  public set inherit(value: boolean | cdktf.IResolvable | undefined) {
    this._inherit = value;
  }
  public resetInherit() {
    this._inherit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritInput() {
    return this._inherit
  }

  // login - computed: false, optional: true, required: false
  private _login?: boolean | cdktf.IResolvable | undefined; 
  public get login() {
    return this.getBooleanAttribute('login') as any;
  }
  public set login(value: boolean | cdktf.IResolvable | undefined) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // password - computed: false, optional: true, required: false
  private _password?: string | undefined; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // replication - computed: false, optional: true, required: false
  private _replication?: boolean | cdktf.IResolvable | undefined; 
  public get replication() {
    return this.getBooleanAttribute('replication') as any;
  }
  public set replication(value: boolean | cdktf.IResolvable | undefined) {
    this._replication = value;
  }
  public resetReplication() {
    this._replication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[] | undefined; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[] | undefined) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // search_path - computed: false, optional: true, required: false
  private _searchPath?: string[] | undefined; 
  public get searchPath() {
    return this.getListAttribute('search_path');
  }
  public set searchPath(value: string[] | undefined) {
    this._searchPath = value;
  }
  public resetSearchPath() {
    this._searchPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPathInput() {
    return this._searchPath
  }

  // skip_drop_role - computed: false, optional: true, required: false
  private _skipDropRole?: boolean | cdktf.IResolvable | undefined; 
  public get skipDropRole() {
    return this.getBooleanAttribute('skip_drop_role') as any;
  }
  public set skipDropRole(value: boolean | cdktf.IResolvable | undefined) {
    this._skipDropRole = value;
  }
  public resetSkipDropRole() {
    this._skipDropRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDropRoleInput() {
    return this._skipDropRole
  }

  // skip_reassign_owned - computed: false, optional: true, required: false
  private _skipReassignOwned?: boolean | cdktf.IResolvable | undefined; 
  public get skipReassignOwned() {
    return this.getBooleanAttribute('skip_reassign_owned') as any;
  }
  public set skipReassignOwned(value: boolean | cdktf.IResolvable | undefined) {
    this._skipReassignOwned = value;
  }
  public resetSkipReassignOwned() {
    this._skipReassignOwned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipReassignOwnedInput() {
    return this._skipReassignOwned
  }

  // statement_timeout - computed: false, optional: true, required: false
  private _statementTimeout?: number | undefined; 
  public get statementTimeout() {
    return this.getNumberAttribute('statement_timeout');
  }
  public set statementTimeout(value: number | undefined) {
    this._statementTimeout = value;
  }
  public resetStatementTimeout() {
    this._statementTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementTimeoutInput() {
    return this._statementTimeout
  }

  // superuser - computed: false, optional: true, required: false
  private _superuser?: boolean | cdktf.IResolvable | undefined; 
  public get superuser() {
    return this.getBooleanAttribute('superuser') as any;
  }
  public set superuser(value: boolean | cdktf.IResolvable | undefined) {
    this._superuser = value;
  }
  public resetSuperuser() {
    this._superuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superuserInput() {
    return this._superuser
  }

  // valid_until - computed: false, optional: true, required: false
  private _validUntil?: string | undefined; 
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string | undefined) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass_row_level_security: cdktf.booleanToTerraform(this._bypassRowLevelSecurity),
      connection_limit: cdktf.numberToTerraform(this._connectionLimit),
      create_database: cdktf.booleanToTerraform(this._createDatabase),
      create_role: cdktf.booleanToTerraform(this._createRole),
      encrypted: cdktf.stringToTerraform(this._encrypted),
      encrypted_password: cdktf.booleanToTerraform(this._encryptedPassword),
      idle_in_transaction_session_timeout: cdktf.numberToTerraform(this._idleInTransactionSessionTimeout),
      inherit: cdktf.booleanToTerraform(this._inherit),
      login: cdktf.booleanToTerraform(this._login),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      replication: cdktf.booleanToTerraform(this._replication),
      roles: cdktf.listMapper(cdktf.stringToTerraform)(this._roles),
      search_path: cdktf.listMapper(cdktf.stringToTerraform)(this._searchPath),
      skip_drop_role: cdktf.booleanToTerraform(this._skipDropRole),
      skip_reassign_owned: cdktf.booleanToTerraform(this._skipReassignOwned),
      statement_timeout: cdktf.numberToTerraform(this._statementTimeout),
      superuser: cdktf.booleanToTerraform(this._superuser),
      valid_until: cdktf.stringToTerraform(this._validUntil),
    };
  }
}
