Ext.define("XApp.view.CDUGrid", {
    extend: "Ext.grid.Panel",
    xtype: 'cduGrid',

<<<<<<< HEAD
=======
    requires: [
        "XApp.view.CDUGridController",
        "XApp.view.CDUGridModel"
    ],

>>>>>>> cdugrid
    constructor: function (config) {
        config.tbar = {
            margin: '0 0 10 10',
            xtype: 'container',
            layout: 'hbox',
            items: [{
                xtype: 'button',
                text: '增加' + config.modelName,
                handler: 'add' + config.model
            }, {
                margin: '0 0 0 10',
                xtype: 'button',
                disabled: true,
                text: '修改' + config.modelName,
                handler: 'mod' + config.model
            }, {
                margin: '0 0 0 10',
                xtype: 'button',
                disabled: true,
                text: '删除' + config.modelName,
                handler: 'del' + config.model
            }]
        };
<<<<<<< HEAD
        config.bind= {
            columns : config.columns,
            store : '{'+config.model+'}'
        };

        config.selModel= {
            type : 'checkboxmodel',
                listeners : {
                selectionchange : 'onSelection'+config.model+'Change'
            }
        };

        config.bbar ={
            xtype : "pagingtoolbar",
                displayInfo : true,
                bind: '{'+config.model+'}'
        };
=======
>>>>>>> cdugrid
        this.callParent(arguments);
    }
});
