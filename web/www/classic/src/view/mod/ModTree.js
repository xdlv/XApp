Ext.define("XApp.view.mod.ModTree",{
    extend: "Ext.tree.Panel",
    xtype: 'modtree',
    requires: [
        "XApp.view.mod.ModTreeController",
        "XApp.view.mod.ModTreeModel"
    ],

    controller: "mod-modtree",
    viewModel: {
        type: "mod-modtree"
    },

    html: "Hello, World!!"
});
