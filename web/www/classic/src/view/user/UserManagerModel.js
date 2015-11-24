Ext.define('XApp.view.user.UserManagerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user-usermanager',
    data: {
        name: 'XApp'
<<<<<<< HEAD
    },

    stores: {
        User:{
            model: 'User',
            session : true,
            autoLoad: true
        },
        Role: {
            model: 'Role',
            session: true,
            autoLoad: true
        }
=======
>>>>>>> cdugrid
    }

});
