sap.ui.controller("be.ordina.sap.controller.MaterialListView", {


 handleSearch: function(oEvent) {
     alert("meow");
    var sValue = oEvent.getParameter("value");
    var oFilter = new sap.ui.model.Filter("materialNumber", sap.ui.model.FilterOperator.Contains, sValue);
    var oBinding = oEvent.getSource().getBinding("items");
    oBinding.filter([oFilter]);
  }
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf be.ordina.sap.view.MaterialListView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf be.ordina.sap.view.MaterialListView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf be.ordina.sap.view.MaterialListView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf be.ordina.sap.view.MaterialListView
*/
//	onExit: function() {
//
//	}

});