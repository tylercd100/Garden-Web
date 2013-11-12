App.module("ContactsApp", function(ContactsApp, App, Backbone, Marionette, $, _){
  ContactsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "contacts(/filter/criterion::criterion)": "listContacts",
      "contacts/:id": "showContact",
      "contacts/:id/edit": "editContact"
    }
  });

  var API = {
    listContacts: function(criterion){
      ContactsApp.List.Controller.listContacts(criterion);
      App.execute("set:active:header", "contacts");
    },

    showContact: function(id){
      ContactsApp.Show.Controller.showContact(id);
      App.execute("set:active:header", "contacts");
    },

    editContact: function(id){
      ContactsApp.Edit.Controller.editContact(id);
      App.execute("set:active:header", "contacts");
    }
  };

  App.on("contacts:list", function(){
    App.navigate("contacts");
    API.listContacts();
  });

  App.on("contacts:filter", function(criterion){
    if(criterion){
      App.navigate("contacts/filter/criterion:" + criterion);
    }
    else{
      App.navigate("contacts");
    }
  });

  App.on("contact:show", function(id){
    App.navigate("contacts/" + id);
    API.showContact(id);
  });

  App.on("contact:edit", function(id){
    App.navigate("contacts/" + id + "/edit");
    API.editContact(id);
  });

  App.addInitializer(function(){
    new ContactsApp.Router({
      controller: API
    });
  });
});
