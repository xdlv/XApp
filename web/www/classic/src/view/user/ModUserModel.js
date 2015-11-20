Ext.define('XApp.view.user.ModUserModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user-moduser',
    data: {
        name: 'XApp'
    },
    
    stores: {
    	loginUsers:{
    		model: 'User',
    		session : true,
    		autoLoad: true
    	}
    }
});
