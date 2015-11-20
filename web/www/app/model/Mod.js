Ext.define('XApp.model.Mod',{
	extend: 'XApp.model.Base',
	
	fields : ['name','url','routerId','parentId'],

	manyToMany : 'User'
});