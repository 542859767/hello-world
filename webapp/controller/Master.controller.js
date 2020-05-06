sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("DemoRoutingDemoRouting.controller.Master", {
      onNavBack: function(){
      	history.go(-1);
      }
	});
});