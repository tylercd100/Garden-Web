App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){
  Entities.Device = Backbone.Model.extend({
    urlRoot: "device",

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

  // Entities.configureStorage(Entities.Device);

  Entities.DeviceCollection = Backbone.Collection.extend({
    url: "device",
    model: Entities.Device,
    comparator: "name"
  });

  // Entities.configureStorage(Entities.DeviceCollection);

  var initializeDevices = function(){
    devices = new Entities.DeviceCollection([
      { id: 1, name: "Shelf 1", type: "light", state: 0, pin: 1 },
      { id: 2, name: "Shelf 2", type: "light", state: 0, pin: 2 },
      { id: 3, name: "Top", type: "pump", state: 0, pin: 3 }
    ]);
    devices.forEach(function(device){
      device.save();
    });
    return devices.models;
  };

  var API = {
    getDeviceEntities: function(){
      var devices = new Entities.DeviceCollection();
      var defer = $.Deferred();
      devices.fetch({
        success: function(data){
          defer.resolve(data);
        }
      });
      var promise = defer.promise();
      $.when(promise).done(function(devices){
        if(devices.length === 0){
          // if we don't have any devices yet, create some for convenience
          var models = initializeDevices();
          devices.reset(models);
        }
      });
      return promise;
    },

    getDeviceEntity: function(deviceId){
      var device = new Entities.Device({id: deviceId});
      var defer = $.Deferred();
      setTimeout(function(){
        device.fetch({
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

  App.reqres.setHandler("entities:device", function(){
    return API.getDeviceEntities();
  });

  App.reqres.setHandler( "entity:device" , function(id){
    return API.getDeviceEntity(id);
  });
});
