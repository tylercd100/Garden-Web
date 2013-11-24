App.module("DevicesApp", function(DevicesApp, App, Backbone, Marionette, $, _){
  DevicesApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "devices(/filter/criterion::criterion)": "listDevices",
      "devices/:id": "showDevice",
      "devices/:id/edit": "editDevice"
    }
  });

  var API = {
    listDevices: function(criterion){
      DevicesApp.List.Controller.listDevices(criterion);
      App.execute("set:active:header", "devices");
    },

    showDevice: function(id){
      DevicesApp.Show.Controller.showDevice(id);
      App.execute("set:active:header", "devices");
    },

    editDevice: function(id){
      DevicesApp.Edit.Controller.editDevice(id);
      App.execute("set:active:header", "devices");
    }
  };

  App.on("devices:list", function(){
    App.navigate("devices");
    API.listDevices();
  });

  App.on("devices:filter", function(criterion){
    if(criterion){
      App.navigate("devices/filter/criterion:" + criterion);
    }
    else{
      App.navigate("devices");
    }
  });

  App.on("device:show", function(id){
    App.navigate("devices/" + id);
    API.showDevice(id);
  });

  App.on("device:edit", function(id){
    App.navigate("devices/" + id + "/edit");
    API.editDevice(id);
  });

  App.addInitializer(function(){
    new DevicesApp.Router({
      controller: API
    });
  });
});
