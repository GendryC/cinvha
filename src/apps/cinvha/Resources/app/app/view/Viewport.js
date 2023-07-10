Ext.define('app.view.Viewport',{
	extend:"Ext.container.Viewport",
	layout:"fit",
	initComponent:function() {
        this.items = {
            xtype: 'panel',
            html:"hola",
            title:'Hola'
        };
                
        
        this.callParent();
    }
});