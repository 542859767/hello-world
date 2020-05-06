sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("DemoRoutingDemoRouting.controller.view2", {
		onNavBack: function() {
			history.go(-1);
		},
		onClick: function() {
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter.navTo("Master");
		}

	});
});