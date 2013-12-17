App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){
  Entities.SensorRecord = Backbone.Model.extend({
    urlRoot: "sensorRecord",

    defaults: {

    },
    initialize:function(){
      this.set('sensor_id',parseInt(this.get('sensor_id')));
      this.set('value',parseInt(this.get('value')));
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

  // Entities.configureStorage(Entities.SensorRecord);

  Entities.SensorRecordCollection = Backbone.Collection.extend({
    url: "sensorRecord",
    model: Entities.SensorRecord,
    comparator: "name"
  });

  // Entities.configureStorage(Entities.SensorRecordCollection);

  var initializeSensorRecords = function(){
    sensorRecords = new Entities.SensorRecordCollection([
      { id: 1, name: "Inside Temperature", type: "temperature"},
      { id: 2, name: "Inside Humidity", type: "humidity"},
    ]);
    sensorRecords.forEach(function(sensorRecord){
      sensorRecord.save();
    });
    return sensorRecords.models;
  };

  var API = {
    getSensorRecordEntities: function(){
      var sensorRecords = new Entities.SensorRecordCollection();
      var defer = $.Deferred();
      sensorRecords.fetch({
        success: function(data){
          defer.resolve(data);
        }
      });
      var promise = defer.promise();
      $.when(promise).done(function(sensorRecords){
        if(sensorRecords.length === 0){
          // if we don't have any sensorrecords yet, create some for convenience
          var models = initializeSensorRecords();
          sensorRecords.reset(models);
        }
      });
      return promise;
    },

    getSensorRecordEntity: function(sensorRecordId){
      var sensorRecord = new Entities.SensorRecord({id: sensorRecordId});
      var defer = $.Deferred();
      setTimeout(function(){
        sensorRecord.fetch({
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

  App.reqres.setHandler("entities:sensor_record", function(){
    return API.getSensorRecordEntities();
  });

  App.reqres.setHandler( "entity:sensor_record" , function(id){
    return API.getSensorRecordEntity(id);
  });
});
