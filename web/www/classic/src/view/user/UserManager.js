Ext.define("XApp.view.user.UserManager", {
    extend: "Ext.panel.Panel",

    requires: [
        "XApp.view.user.UserManagerController",
        "XApp.view.user.UserManagerModel",
        "XApp.view.CDUGrid"
    ],

    controller: "user-usermanager",
    viewModel: {
        type: "user-usermanager"
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'container',
        flex: 1,
        margin: 10,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'cduGrid',
            modelName: '用户',
            model: 'User',
            flex: 1,
            columns: [{
                text: "用户名",
                sortable: true,
                dataIndex: 'name'
            }, {
                text: "邮箱",
                dataIndex: 'mail'
            }]
        },{
            xtype: 'cduGrid',
            modelName: '角色',
            model: 'Role',
            margin: '0 0 0 10',
            flex: 1,
            columns: [{
                text: "角色名",
                sortable: true,
                dataIndex: 'name'
            }]
        }]
    },{
        xtype: 'container',
        flex: 1,
        margin: 10,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'cduGrid',
            modelName: '权限',
            model: 'Mod',
            flex: 1,
            columns: [{
                text: "名称",
                sortable: true,
                dataIndex: 'name'
            }, {
                text: "邮箱",
                dataIndex: 'mail'
            }]
        },{
            xtype: 'cduGrid',
            modelName: '角色',
            model: 'Role',
            margin: '0 0 0 10',
            flex: 1,
            columns: [{
                text: "角色名",
                sortable: true,
                dataIndex: 'name'
            }]
        }]
    }]
});
