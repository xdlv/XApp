
Ext.define("XApp.view.user.UserManager",{
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

    items: [{
        xtype: 'cduGrid',
        modelName: '用户',
        model: 'User'
    }]
});
