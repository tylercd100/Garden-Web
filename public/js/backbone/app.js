define([
	'jquery',
	'underscore',
	'backbone',
	'collections/devices',
	'collections/schedules',
	'views/light',
	'views/fan',
	'views/motor',
	'views/heater',
	'views/schedule',
	'views/pump',
	'views/device',
], function(
	$, 
	_, 
	Backbone, 
	DevicesCollection,
	SchedulesCollection,
	LightView,
	FanView,
	MotorView,
	HeaterView,
	ScheduleView,
	PumpView,
	DeviceView
){
	var initialize = function(){
		var devices = new DevicesCollection(window.Meta.devices);
		var schedules = new SchedulesCollection(window.Meta.schedules);

		App.Collections.devices = devices;
		App.Collections.schedules = schedules;

		_.each(devices.models,function(model){
			model.schedules = new SchedulesCollection(schedules.where({'device_id':model.get('id')}));
		})

		_.each(devices.models,function(model){
			var v;
			if(model.get('type') == 'light')
				v = new LightView({model: model});
			else if(model.get('type') == 'pump')
				v = new PumpView({model: model});
			else if(model.get('type') == 'fan')
				v = new FanView({model: model});
			else if(model.get('type') == 'motor')
				v = new MotorView({model: model});
			else if(model.get('type') == 'heater')
				v = new HeaterView({model: model});
			else{
				alert(model.get('type'))
				v = new DeviceView({model: model});
			}
			$('[holds=device-'+model.get('type')+'-view]').append(v.render().el);

			_.each(model.schedules.models,function(sch){
				var g;
				g = new ScheduleView({model: sch});
				v.$el.find('[holds=schedule-view]').append(g.render().el)
			})
		})

		console.log(devices,schedules)
	}
	return {
		initialize: initialize
	};
});
