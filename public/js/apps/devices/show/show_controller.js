App.module("DevicesApp.Show", function(Show, App, Backbone, Marionette, $, _){
  Show.Controller = {
    showDevice: function(id){
      var loadingView = new App.Common.Views.Loading({
        title: "Artificial Loading Delay",
        message: "Data loading is delayed to demonstrate using a loading view."
      });
      App.mainRegion.show(loadingView);

      var fetchingDevice = App.request("device:entity", id);
      $.when(fetchingDevice).done(function(device){
        var deviceView;
        if(device !== undefined){
          deviceView = new Show.Device({
            model: device
          });

          deviceView.on("device:edit", function(device){
            App.trigger("device:edit", device.get("id"));
          });
        }
        else{
          deviceView = new Show.MissingDevice();
        }

        App.mainRegion.show(deviceView);
      });
    }
  }
});
