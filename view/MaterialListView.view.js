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

		var materialTemplate = new sap.m.ColumnListItem({
			id: 'materialTemplate',
			cells: [
                new sap.m.Image({
					src: "{image}"
				}),
				new sap.m.Text({
					text: "{number}"
				}),
				new sap.m.Text({
					text: "{description}"
				}),
				new sap.m.Text({
					text: "{type}"
				}),
				new sap.m.Text({
					text: "{hierarchy}"
				}),
				new sap.m.Text({
					text: "{quality}"
				}),
				new sap.m.Text({
					text: "{diameter}" + " " + "{diameter_unit}"
				}),
				new sap.m.Text({
					text: "{stock}"
				})
											 ]
		});

		

		return new sap.m.Page({
			title: "{i18n>appTitle}",
			content: [
			    new sap.ui.comp.filterbar.FilterBar("filterBar", {
					filterGroupItems: [
			        new sap.ui.comp.filterbar.FilterGroupItem("fgiMaterialDesc", {
							groupTitle: "{i18n>material}",
							groupName: "material",
							name: "fgiDescription",
							label: "{i18n>materialDesc}",
							control: new sap.m.Input("inpDescription", {
								name: "inpDescription",
								change: function(oEvent) {
								    oController.onFilter(oEvent);
								}
							}),
							visibleInFilterBar: true
						}),
				    new sap.ui.comp.filterbar.FilterGroupItem("fgiMaterialNumber", {
							groupTitle: "{i18n>material}",
							groupName: "material",
							name: "fgiMaterialNumber",
							label: "{i18n>materialNumber}",
							control: new sap.m.Input("inpMaterialNumber", {
								name: "inpMaterialNumber",
								change: function(oEvent) {
								    oController.onFilter(oEvent);
								}
							}),
							visibleInFilterBar: true
						}),
		            new sap.ui.comp.filterbar.FilterGroupItem("fgiMaterialType", {
							groupTitle: "{i18n>type}",
							groupName: "type",
							name: "fgiMaterialType",
							label: "{i18n>materialType}",
							control: new sap.m.Input("inpMaterialType", {
							    change: function(oEvent) {
								    oController.onFilter(oEvent);
								}
							}),
							visibleInAdvancedArea: true,
							visibleInFilterBar: false
						}),
				    new sap.ui.comp.filterbar.FilterGroupItem("fgiMaterialHierarchy", {
							groupTitle: "{i18n>type}",
							groupName: "type",
							name: "fgiMaterialHierarchy",
							label: "{i18n>hierarchy}",
							control: new sap.m.Input("inpMaterialHierarchy", {
							    change: function(oEvent) {
								    oController.onFilter(oEvent);
								}
							}),
							visibleInAdvancedArea: true,
							visibleInFilterBar: false
						}),
					new sap.ui.comp.filterbar.FilterGroupItem("fgiDetailSteelQuality", {
							groupTitle: "{i18n>detail}",
							groupName: "detail",
							name: "fgiDetailSteelQuality",
							label: "{i18n>steelQuality}",
							control: new sap.m.Input("inpDetailSteelQuality", {
							    change: function(oEvent) {
								    oController.onFilter(oEvent);
								}
							}),
							visibleInAdvancedArea: true,
							visibleInFilterBar: false
						}),
					new sap.ui.comp.filterbar.FilterGroupItem("fgiDetailDiameter", {
							groupTitle: "{i18n>detail}",
							groupName: "detail",
							name: "fgiDetailDiameter",
							label: "{i18n>diameter}",
							control: new sap.m.Input("inpDetailDiameter", {
							    change: function(oEvent) {
								    oController.onFilter(oEvent);
								}
							}),
							visibleInAdvancedArea: true,
							visibleInFilterBar: false
						}),
					new sap.ui.comp.filterbar.FilterGroupItem("fgiDetailLength", {
							groupTitle: "{i18n>detail}",
							groupName: "detail",
							name: "fgiDetailLength",
							label: "{i18n>length}",
							control: new sap.m.Input("inpDetailLength", {
							    change: function(oEvent) {
								    oController.onFilter(oEvent);
								}
							}),
							visibleInAdvancedArea: true,
							visibleInFilterBar: false
						})
		  ]
				}),
				new sap.m.Table("materialTable", {
					headerToolbar: new sap.m.Toolbar({
						content: [
					        new sap.m.Title({
								text: 'Items' //TO DO formatter functie schrijven this.getItems.length
							}),
							new sap.m.ToolbarSpacer(),
							new sap.m.SearchField('materialSearch', {
								placeholder: '{i18n>materialNumber}',
								search: oController.handleSearch,
								width: '30%'
							})
					        ]
					}),
					columns: [
																						new sap.m.Column({
							header: new sap.m.Text({
								text: "{i18n>image}"
							})
						}),
																						new sap.m.Column({
							header: new sap.m.Text({
								text: "{i18n>materialNumber}"
							})
						}),
																						new sap.m.Column({
							header: new sap.m.Text({
								text: "{i18n>description}"
							})
						}),
																						new sap.m.Column({
							header: new sap.m.Text({
								text: "{i18n>type}"
							})
						}),
																						new sap.m.Column({
							header: new sap.m.Text({
								text: "{i18n>hierarchy}"
							})
						}),
																						new sap.m.Column({
							header: new sap.m.Text({
								text: "{i18n>steelQuality}"
							})
						}),
																						new sap.m.Column({
							header: new sap.m.Text({
								text: "{i18n>measures}"
							})
						}),
																						new sap.m.Column()
																						]
				}).bindItems({
					path: "/MaterialSet",
					template: materialTemplate,
					//sorter: materialSorters,
					filter: oController.materialFilters
				})
			    ],
			footer: new sap.m.Bar()
		});
	}

});