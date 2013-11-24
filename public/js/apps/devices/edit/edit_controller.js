App.module("DevicesApp.Edit", function(Edit, App, Backbone, Marionette, $, _){
  Edit.Controller = {
    editDevice: function(id){
      var loadingView = new App.Common.Views.Loading({
        title: "Artificial Loading Delay",
        message: "Data loading is delayed to demonstrate using a loading view."
      });
      App.mainRegion.show(loadingView);

      var fetchingDevice = App.request("device:entity", id);
      $.when(fetchingDevice).done(function(device){
        var view;
        if(device !== undefined){
          view = new Edit.Device({
            model: device,
            generateTitle: true
          });

          view.on("form:submit", function(data){
            if(device.save(data)){
              App.trigger("device:show", device.get("id"));
            }
            else{
              view.triggerMethod("form:data:invalid", device.validationError);
            }
          });
        }
        else{
          view = new App.DevicesApp.Show.MissingDevice();
        }

        App.mainRegion.show(view);
      });
    }
  };
});
