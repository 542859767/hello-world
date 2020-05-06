sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("DemoRoutingDemoRouting.controller.view1", {
		onClick: function() {
			var abc = "hello"; 
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter.navTo("view2",{value:abc});
		}

	});
});