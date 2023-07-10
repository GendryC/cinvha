Ext.define('app.controller.Basic',{
	extend:"Ext.app.Controller",
	stores:[],
	models:[],
	refs:[],
	init:function () {
        this.control({
            'viewport': {
                render: this.onRender
            }
        });


    },
	onRender:function () {
        
    }
});