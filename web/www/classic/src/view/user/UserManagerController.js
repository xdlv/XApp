Ext.define('XApp.view.user.UserManagerController', {
    extend: 'XApp.view.BaseViewController',
    alias: 'controller.user-usermanager',

    getGrid: function (btn) {
        return btn.up('grid');
    },
    // user manager
    openUserInfo: function (btn,user) {
        Ext.create('XApp.view.cdu.BaseInfo', {
            controller: this,
            viewModel: {
                data: {
                    operation: 'saveUser',
                    grid: this.getGrid(btn),
                    title: '用户信息',
                    user: user
                }
            },
            fieldItems: [{
                xtype: 'textfield',
                name: 'user.id',
                hidden: true,
                bind: '{user.id}'
            }, {
                name: 'user.name',
                xtype: 'textfield',
                fieldLabel: '用户名',
                bind: '{user.name}'
            }, {
                xtype: 'textfield',
                name: 'user.password',
                inputType: 'password',
                fieldLabel: '密码',
                bind: '{user.password}'
            }, {
                xtype: 'textfield',
                name: 'user.mail',
                fieldLabel: '邮箱',
                bind: '{user.mail}'
            }]
        }).show();
    },
    saveUser: function (btn) {
        var params = btn.up('form').getValues();
        var win = btn.up('window');
        this.ajax({
            url: 'user!saveUser.cmd',
            params: btn.up('form').getValues(),
            success: function (response) {
                win.getViewModel().get('grid').getStore().reload();
                win.close();
            }
        });
    },

    addUser: function (btn) {
        this.openUserInfo(btn,{});
    },
    modUser: function (btn) {
        var users = this.getGrid(btn).getSelection();
        this.openUserInfo(btn,Ext.apply({}, users[0]));
    },
    delUser: function (btn) {
        var users = this.getGrid(btn).getSelection();
        var ids = {};
        Ext.each(users, function (v, i) {
            ids['users[' + i + '].id'] = v.get('id');
        });
        this.ajax({
            url: 'user!deleteUser.cmd',
            params: ids,
            success: function (response) {
                btn.up('grid').getStore().reload();
            }
        });
    },
    //role manager
    openRoleInfo: function (btn,role) {
        Ext.create('XApp.view.cdu.BaseInfo', {
            controller: this,
            viewModel: {
                data: {
                    operation: 'saveRole',
                    grid: this.getGrid(btn),
                    title: '角色信息',
                    role: role
                }
            },
            fieldItems: [{
                xtype: 'textfield',
                name: 'role.id',
                hidden: true,
                bind: '{role.id}'
            }, {
                name: 'role.name',
                xtype: 'textfield',
                fieldLabel: '角色名',
                bind: '{role.name}'
            }]
        }).show();
    },
    saveRole: function (btn) {
        var params = btn.up('form').getValues();
        var win = btn.up('window');
        this.ajax({
            url: 'role!saveRole.cmd',
            params: btn.up('form').getValues(),
            success: function (response) {
                win.getViewModel().get('grid').getStore().reload();
                win.close();
            }
        });
    },

    addRole: function (btn) {
        this.openRoleInfo(btn,{});
    },
    modRole: function (btn) {
        var roles = this.getGrid(btn).getSelection();
        this.openRoleInfo(btn,Ext.apply({}, roles[0]));
    },
    delRole: function (btn) {
        var roles = this.getGrid(btn).getSelection();
        var ids = [];
        Ext.each(roles, function (v, i) {
            ids['roles[' + i + '].id'] = v.get('id');
        });
        this.ajax({
            url: 'role!deleteRole.cmd',
            params: ids,
            success: function (response) {
                btn.up('grid').getStore().reload();
            }
        });
    }
});
