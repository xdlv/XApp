Ext.define('XApp.view.user.UserManagerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-usermanager',

    addUser : function(btn){
        Ext.create('XApp.view.user.AddUser').show();
    },
    modUser: function(btn){
        var users = btn.up('grid').getSelection();
<<<<<<< HEAD
        //console.log(this.getViewModel().getData().user);
=======
        console.log(this.getViewModel().getData().user);
>>>>>>> cdugrid
        Ext.create('XApp.view.user.AddUser',{
            viewModel: {
                data: {
                    user: Ext.apply({},users[0]),
                    superUser : this.getViewModel().getData().currentUser.get('userRole') == 0
                }
            }
        }).show();
    },
    delUser: function(btn){
        var users = btn.up('grid').getSelection();
        var ids = {};
        Ext.each(users, function(v,i){
            ids['users[' + i + '].id'] = v.get('id');
        });
        XApp.Util.ajax({
            url : 'user!deleteUser.cmd',
            params: ids,
            success: function(response, opts) {
                Ext.MessageBox.alert('删除用户',obj.msg);
                btn.up('grid').getStore().reload();
            }
        });
    }
    
});
