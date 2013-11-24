App.module("DevicesApp.New", function(New, App, Backbone, Marionette, $, _){
  New.Device = App.DevicesApp.Common.Views.Form.extend({
    title: "New Device",

    onRender: function(){
      this.$(".js-submit").text("Create device");
    }
  });
});
