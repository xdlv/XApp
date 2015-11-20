Ext.define('XApp.Application', {
    extend: 'Ext.app.Application',
    requires: [

    ],
    name: 'XApp',
    
    controllers: ['Root@XApp.controller'],
    models: ['User','Mod'],
    stores: [
        // TODO: add global / shared stores here
    ],
    
    onLaunch: function () {
        
    },

    onAppUpdate: function () {
        window.localStorage.clear();
        window.location.reload();
    }
});
