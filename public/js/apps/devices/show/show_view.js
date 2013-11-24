App.module("DevicesApp.Show", function(Show, App, Backbone, Marionette, $, _){
  Show.MissingDevice = Marionette.ItemView.extend({
    template: "#missing-device-view"
  });

  Show.Device = Marionette.ItemView.extend({
    template: "#device-view",

    events: {
      "click a.js-edit": "editClicked"
    },

    editClicked: function(e){
      e.preventDefault();
      this.trigger("device:edit", this.model);
    }
  });
});
