jQuery.sap.declare("be.ordina.sap.Component");
jQuery.sap.require("sap.ui.core.routing.History");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
jQuery.sap.require("sap.ui.core.UIComponent");


sap.ui.core.UIComponent.extend("be.ordina.sap.Component", {
	metadata: {
		name: "Material Search",
		version: "0.1",
		dependencies: {
			libs: ["sap.m", "sap.ui.layout", "sap.ui.comp"]
		},
		
		rootView: {
			viewName: "be.ordina.sap.view.App",
			type: "JS"
		},
		config: {
			resourceBundle: "i18n/messageBundle.properties",
			serviceConfig: {
				name: "Hana",
				serviceUrl: "https://ordsaphana01.ordina.belgium:50003/sap/opu/odata/sap/ZFLUXSYS_SRV/"
			}
		},
		routing: {
			config: {
			//	routerClass: be.ordina.sap.MyRouter,
				viewType: "JS", //sap.ui.core.mvc.ViewType.JS,
				viewPath: "be.ordina.sap.view",
				targetAggregation: "pages",
				targetControl: "app",
				clearTarget: false
			},
			routes: [
				{
					pattern: "",
					name: "materialListview",
					view: "MaterialListView"

			}]
		}
	},

	init: function() {
	
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		var deviceModel = new sap.ui.model.json.JSONModel({
			isTouch: sap.ui.Device.support.touch,
			isNoTouch: !sap.ui.Device.support.touch,
			isPhone: sap.ui.Device.system.phone,
			isNoPhone: !sap.ui.Device.system.phone,
			listMode: sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
			listItemType: sap.ui.Device.system.phone ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		
		var sRootPath = jQuery.sap.getModulePath("be.ordina.sap");
		var oServiceConfig = this.getMetadata().getConfig().serviceConfig;
        var sServiceUrl = oServiceConfig.serviceUrl;
        
        var mConfig = this.getMetadata().getConfig();
		
		// the metadata is read to get the location of the i18n language files later
       
        //this._routeMatchedHandler = new sap.m.routing.RouteMatchedHandler(this.getRouter(), this._bRouterCloseDialogs);

        // create oData model
        var  oDataModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
        this.setModel(oDataModel);
        sap.ui.getCore().setModel(oDataModel);

        // set i18n model
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl : [ sRootPath, mConfig.resourceBundle ].join("/")
        });
        this.setModel(i18nModel, "i18n");

		this.setModel(deviceModel, "device");
		this.getRouter().initialize();

	},

	createContent: function() {
		var oViewData = {
			component: this
		};

		return sap.ui.view({
			viewName: "be.ordina.sap.view.App",
			type: sap.ui.core.mvc.ViewType.JS,
			viewData: oViewData
		});
	}

});