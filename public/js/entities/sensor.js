App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){
  Entities.Sensor = Backbone.Model.extend({
    urlRoot: "sensor",

    defaults: {
      name: "",
      type: "",
      pin: ""
    },

    validate: function(attrs, options) {
      var errors = {}
      if (! attrs.name) {
        errors.name = "can't be blank";
      }
      if (! attrs.type) {
        errors.type = "can't be blank";
      }
      else{
        if (attrs.type.length < 2) {
          errors.type = "is too short";
        }
      }
      if( ! _.isEmpty(errors)){
        return errors;
      }
    }
  });

  // Entities.configureStorage(Entities.Sensor);

  Entities.SensorCollection = Backbone.Collection.extend({
    url: "sensor",
    model: Entities.Sensor,
    comparator: "name"
  });

  // Entities.configureStorage(Entities.SensorCollection);

  var initializeSensors = function(){
    sensors = new Entities.SensorCollection([
      { id: 1, name: "Inside Temperature", type: "temperature"},
      { id: 2, name: "Inside Humidity", type: "humidity"},
    ]);
    sensors.forEach(function(sensor){
      sensor.save();
    });
    return sensors.models;
  };

  var API = {
    getSensorEntities: function(){
      var sensors = new Entities.SensorCollection();
      var defer = $.Deferred();
      sensors.fetch({
        success: function(data){
          defer.resolve(data);
        }
      });
      var promise = defer.promise();
      $.when(promise).done(function(sensors){
        if(sensors.length === 0){
          // if we don't have any sensors yet, create some for convenience
          var models = initializeSensors();
          sensors.reset(models);
        }
      });
      return promise;
    },

    getSensorEntity: function(sensorId){
      var sensor = new Entities.Sensor({id: sensorId});
      var defer = $.Deferred();
      setTimeout(function(){
        sensor.fetch({
          success: function(data){
            defer.resolve(data);
          },
          error: function(data){
            defer.resolve(undefined);
          }
        });
      }, 0);
      return defer.promise();
    }
  };

  App.reqres.setHandler("entities:sensor", function(){
    return API.getSensorEntities();
  });

  App.reqres.setHandler( "entity:sensor" , function(id){
    return API.getSensorEntity(id);
  });
});
