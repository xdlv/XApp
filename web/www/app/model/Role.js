Ext.define('XApp.model.Role', {
	extend : 'XApp.model.Base',

	fields : [ 'name'],
	
    proxy: {
        url: 'user!obtainUsers.cmd',
        reader: {
        	type: 'json',
        	rootProperty: 'roles'
        }
    }
});