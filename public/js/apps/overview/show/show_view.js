App.module("Overview.Show", function(Show, App, Backbone, Marionette, $, _){
	Show.Main = Marionette.ItemView.extend({
		template: "#overview-main",
		className: "overview-main",
	});
	Show.Sensor = Marionette.ItemView.extend({
		template: "#overview-sensor",
		className: "overview-sensor",
	});
	Show.Device = Marionette.ItemView.extend({
		template: "#overview-device",
		className: "overview-device",
	});
});
