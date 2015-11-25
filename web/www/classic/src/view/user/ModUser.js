Ext.define("XApp.view.user.ModUser", {
	extend : "Ext.grid.Panel",

	requires : [ "XApp.view.user.ModUserController",
			"XApp.view.user.ModUserModel" ],

	controller : "user-moduser",
	viewModel : {
		type : "user-moduser"
	},

	margin: '10',
	columnLines : true,
	bind : '{loginUsers}',
	selModel : {
		type : 'checkboxmodel',
		listeners : {
			selectionchange : 'onSelectionChange'
		}
	},
	bbar : {
		xtype : "pagingtoolbar",
		displayInfo : true,
		bind: '{loginUsers}'
	},
	
	tbar: {
        margin: '0 0 10 10',
		xtype: 'container',
		layout: 'hbox',
        items: [{
			xtype: 'button',
            text: '增加用户',
            handler: 'addUser'
        },{
			margin: '0 0 0 10',
			reference: 'modButton',
			text: '修改用户',
			xtype: 'button',
			disabled: true,
			handler: 'modUser'
		},{
            margin: '0 0 0 10',
            reference: 'removeButton',
            text: '删除用户',
            xtype: 'button',
            disabled: true,
            handler: 'delUser'
        }]
	}
});
