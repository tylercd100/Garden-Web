App.module("Overview.Show", function(Show, App, Backbone, Marionette, $, _){
	Show.Controller = {
		showOverview: function(){
			var devices = App.request("entities:device");
			var sensors = App.request("entities:sensor");

			$.when(devices,sensors).then(function(devices,sensors){

				//get a unique array of all locations
				var loc = _.union([],devices.pluck('location'),sensors.pluck('location')) 

				//create an array of location objects. [{name: 'location'}]
				var locObjs = (function(){var l = [];_.each(loc,function(_loc){l.push({name:_loc});});return l;})();

				//create new location collection
				var locations = new Show.LocationCollection(locObjs);
				var view = new Show.Main({collection: locations});

				//filter collections by location
				var collectionsByLocation = {};
				var layoutByLocation = {};
				_.each(loc,function(l){
					var sensorsView,
						devicesView,
						sensorsCollection,
						devicesCollection,
						layoutView;

					//get sensors and devices by location
					var _sensors = sensors.where({location:l}); 
					var _devices = devices.where({location:l}); 

					//create unique collection objects
					sensorsCollection = new Backbone.Collection();
					devicesCollection = new Backbone.Collection();

					//add sensors and devices to the collections
					sensorsCollection.reset(_sensors);
					devicesCollection.reset(_devices);

					//collection views!
					devicesView = new Show.Devices({collection: devicesCollection});
					sensorsView = new Show.Sensors({collection: sensorsCollection});

					//create location layout views
					layoutView = new Show.Location();

					//render sensors and devices when the layout is rendered
					layoutView.on('show',function(){
						layoutView.deviceRegion.show(devicesView);
						layoutView.sensorRegion.show(sensorsView);
						layoutView.$el.find('.has-tooltip').tooltip({placement:'bottom'});

						sensorsView.on('all',function(){
							console.log(arguments);
						})

						var timeout;

						function dothis(){
							var devices = App.request("entities:device");
							var sensors = App.request("entities:sensor");

							$.when(devices,sensors).then(function(devices,sensors){
								sensorsView.collection.reset(sensors.where({location: l})); 
								devicesView.collection.reset(devices.where({location: l})); 
								timeout = setTimeout(dothis,5000);
							});
						
						}
						
						timeout = setTimeout(dothis,5000);

						layoutView.on('close',function(){
							clearTimeout(timeout);
						})
						
					});

					//render layout for this location when the main view is shown
					view.on('show',function(){
						view[l+"Region"].show(layoutView);
					});


				});

				view.on('render',function(){
					console.log(view)
				});

				//start it up
				App.mainRegion.show(view);
			});
		}
	};
});
