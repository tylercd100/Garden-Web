App.module("DevicesApp.List", function(List, App, Backbone, Marionette, $, _){
  List.Controller = {
    listDevices: function(criterion){
      var loadingView = new App.Common.Views.Loading();
      App.mainRegion.show(loadingView);

      var fetchingDevices = App.request("device:entities");

      var devicesListLayout = new List.Layout();
      var devicesListPanel = new List.Panel();

      $.when(fetchingDevices).done(function(devices){

        console.log(devices)

        var filteredDevices = App.Entities.FilteredCollection({
          collection: devices,
          filterFunction: function(filterCriterion){
            var criterion = filterCriterion.toLowerCase();
            return function(device){
              if(device.get("name").toLowerCase().indexOf(criterion) !== -1
                || device.get("type").toLowerCase().indexOf(criterion) !== -1
                || device.get("pin").toLowerCase().indexOf(criterion) !== -1){
                  return device;
              }
            };
          }
        });

        if(criterion){
          filteredDevices.filter(criterion);
          devicesListPanel.once("show", function(){
            devicesListPanel.triggerMethod("set:filter:criterion", criterion);
          });
        }

        var devicesListView = new List.Devices({
          collection: filteredDevices
        });

        devicesListPanel.on("devices:filter", function(filterCriterion){
          filteredDevices.filter(filterCriterion);
          App.trigger("devices:filter", filterCriterion);
        });

        devicesListLayout.on("show", function(){
          devicesListLayout.panelRegion.show(devicesListPanel);
          devicesListLayout.devicesRegion.show(devicesListView);
        });

        devicesListPanel.on("device:new", function(){
          var newDevice = new App.Entities.Device();

          var view = new App.DevicesApp.New.Device({
            model: newDevice
          });

          view.on("form:submit", function(data){
            var highestId = devices.max(function(c){ return c.id; }).get("id");
            data.id = highestId + 1;
            if(newDevice.save(data)){
              devices.add(newDevice);
              view.trigger("dialog:close");
              var newDeviceView = devicesListView.children.findByModel(newDevice);
              // check whether the new device view is displayed (it could be
              // invisible due to the current filter criterion)
              if(newDeviceView){
                newDeviceView.flash("success");
              }
            }
            else{
              view.triggerMethod("form:data:invalid", newDevice.validationError);
            }
          });

          App.dialogRegion.show(view);
        });

        devicesListView.on("itemview:device:show", function(childView, model){
          App.trigger("device:show", model.get("id"));
        });

        devicesListView.on("itemview:device:edit", function(childView, model){
          var view = new App.DevicesApp.Edit.Device({
            model: model
          });

          view.on("form:submit", function(data){
            if(model.save(data)){
              childView.render();
              view.trigger("dialog:close");
              childView.flash("success");
            }
            else{
              view.triggerMethod("form:data:invalid", model.validationError);
            }
          });

          App.dialogRegion.show(view);
        });

        devicesListView.on("itemview:device:delete", function(childView, model){
          model.destroy();
        });

        devicesListView.on("all", function(childView, model){
          console.log(arguments)
        });

        App.mainRegion.show(devicesListLayout);

        setInterval(function(){
          _.each(filteredDevices.models,function(d){
            d.fetch({
              
              // success:function(model,data){
              //   console.log(data)
              //   d.set(data)
              // }
            });
          })
        },2000)
      });
    }
  }
});
