sap.ui.jsview("be.ordina.sap.view.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf be.ordina.gevr.view.App
	*/ 
	getControllerName : function() {
		return "be.ordina.sap.controller.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf be.ordina.gevr.view.App
	*/ 
	createContent : function(oController) {
		return new sap.m.Shell({
		    title: "Fluxsys Demo"
		}).setApp(new sap.m.App("app", {
		    
		}));
	}

});
