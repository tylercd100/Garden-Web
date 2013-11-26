App.module("Overview.Show", function(Show, App, Backbone, Marionette, $, _){
	Show.Main = Marionette.Layout.extend({
		template: "#overview-main",
		className: "overview-main container",
		onBeforeRender:function(){
			var self = this;
			_.each(self.collection.models,function(m){
				var n = m.get('name')
				self.addRegion(n+'Region','#'+n+'-region');
			})
		},
	});

	Show.Location = Marionette.Layout.extend({
		template: "#overview-location",
		className: "location",
		regions:{
			sensorRegion:'#sensor-region',
			deviceRegion:'#device-region',
		},
	});

	Show.Sensor = Marionette.ItemView.extend({
		template: "#overview-sensor",
		className: "sensor",
	});

	Show.Device = Marionette.ItemView.extend({
		template: "#overview-device",
		className: "device",
	});

	Show.Sensors = Marionette.CollectionView.extend({
		template: "#overview-sensors",
		className: "sensors",
		itemView: Show.Sensor,
	});

	Show.Devices = Marionette.CollectionView.extend({
		template: "#overview-devices",
		className: "devices",
		itemView: Show.Device,
	});

	Show.LocationCollection = Backbone.Collection.extend({});

});
