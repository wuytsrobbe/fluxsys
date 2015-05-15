sap.ui.jsview("be.ordina.sap.view.MaterialListView", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf be.ordina.sap.view.MaterialListView
	 */
	getControllerName: function() {
		return "be.ordina.sap.controller.MaterialListView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf be.ordina.sap.view.MaterialListView
	 */
	createContent: function(oController) {
		return new sap.m.Page({
			title: "{i18n>appTitle}",
			content: [
			    new sap.ui.comp.filterbar.FilterBar("filterBar", {
					filterGroupItems: [
			        new sap.ui.comp.filterbar.FilterGroupItem("fgiMaterialDesc", {
							groupTitle: "{i18n>material}",
							groupName: "material",
							name: "fgiMaterial",
							label: "{i18n>materialDesc}",
							control: new sap.m.Input("inpMaterial", {
								name: "inpMaterial"
							}),
							visibleInFilterBar: false

						}),
				    new sap.ui.comp.filterbar.FilterGroupItem("fgiMaterialNumber", {
							groupTitle: "{i18n>material}",
							groupName: "material",
							name: "fgiMaterialNumber",
							label: "{i18n>materialNumber}",
							control: new sap.m.Input("inpMaterialNumber", {
								name: "inpMaterialNumber"
							}),
							visibleInFilterBar: false
						}),
		            new sap.ui.comp.filterbar.FilterGroupItem("fgiMaterialType", {
							groupTitle: "{i18n>type}",
							groupName: "type",
							name: "fgiMaterialType",
							label: "{i18n>materialType}",
							control: new sap.m.Input("inpMaterialType"),
							visibleInAdvancedArea: true,
							visibleInFilterBar: false
						}),
				    new sap.ui.comp.filterbar.FilterGroupItem("fgiMaterialHierarchy", {
							groupTitle: "{i18n>type}",
							groupName: "type",
							name: "fgiMaterialHierarchy",
							label: "{i18n>hierarchy}",
							control: new sap.m.Input("inpMaterialHierarchy"),
							visibleInAdvancedArea: true,
							visibleInFilterBar: false
						}),
					new sap.ui.comp.filterbar.FilterGroupItem("fgiDetailSteelQuality", {
							groupTitle: "{i18n>detail}",
							groupName: "detail",
							name: "fgiDetailSteelQuality",
							label: "{i18n>steelQuality}",
							control: new sap.m.Input("inpDetailSteelQuality"),
							visibleInAdvancedArea: true,
							visibleInFilterBar: false
						}),
					new sap.ui.comp.filterbar.FilterGroupItem("fgiDetailDiameter", {
							groupTitle: "{i18n>detail}",
							groupName: "detail",
							name: "fgiDetailDiameter",
							label: "{i18n>diameter}",
							control: new sap.m.Input("inpDetailDiameter"),
							visibleInAdvancedArea: true,
							visibleInFilterBar: false
						}),
					new sap.ui.comp.filterbar.FilterGroupItem("fgiDetailLength", {
							groupTitle: "{i18n>detail}",
							groupName: "detail",
							name: "fgiDetailLength",
							label: "{i18n>length}",
							control: new sap.m.Input("inpDetailLength"),
							visibleInAdvancedArea: true,
							visibleInFilterBar: false
						})
		  ]
				})
			    ]
		});
	}

});