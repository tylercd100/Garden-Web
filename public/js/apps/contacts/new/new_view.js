App.module("ContactsApp.New", function(New, App, Backbone, Marionette, $, _){
  New.Contact = App.ContactsApp.Common.Views.Form.extend({
    title: "New Contact",

    onRender: function(){
      this.$(".js-submit").text("Create contact");
    }
  });
});
