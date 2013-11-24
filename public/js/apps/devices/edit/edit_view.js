App.module("DevicesApp.Edit", function(Edit, App, Backbone, Marionette, $, _){
  Edit.Device = App.DevicesApp.Common.Views.Form.extend({
    initialize: function(){
      this.title = "Edit " + this.model.get("name") + " " + this.model.get("type");
    },

    onRender: function(){
      if(this.options.generateTitle){
        var $title = $('<h1>', { text: this.title });
        this.$el.prepend($title);
      }

      this.$(".js-submit").text("Update device");
    }
  });
});
