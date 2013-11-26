App.module("Overview.Show", function(Show, App, Backbone, Marionette, $, _){
	Show.Controller = {
		showOverview: function(){
			var devices = App.request("entities:device");
			var sensors = App.request("entities:sensor");

			var locations = ['inside','outside','ground'];
			
			var view = new Show.Main();
			App.mainRegion.show(view);

			$.when(devices,sensors).then(function(devices,sensors){
				_.each(locations,function(location){
					console.log(sensors)
					var _sensors = sensors.where({'location':location});
					var _devices = devices.where({'location':location});

					_.each(_sensors,function(s){
						console.log('here')
						var v = new Show.Sensor({model: s});
						v.model.on('change reset',v.render,v);
						view.$el.find('.window.'+location).append(v.render().el);
					});

					_.each(_devices,function(d){
						console.log('here')
						var v = new Show.Device({model: d});
						v.model.on('change reset',v.render,v);
						view.$el.find('.window.'+location).append(v.render().el);
					});
				});

				view.$el.find('.has-tooltip').tooltip({placement:'bottom'});

				refresh();

			});

			function refresh(){
				var devices = App.request("entities:device");
				var sensors = App.request("entities:sensor");
				var timeout;
				$.when(devices,sensors).then(function(){
					timeout = setTimeout(refresh, 5000);
					view.on('close',function(){
						clearTimeout(timeout);
					});
				})
				
			};
		}
	};
});
