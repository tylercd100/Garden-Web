App.module("HeaderApp", function(Header, App, Backbone, Marionette, $, _){
  var API = {
    listHeader: function(){
      Header.List.Controller.listHeader();
    }
  };

  App.commands.setHandler("set:active:header", function(name){
    App.HeaderApp.List.Controller.setActiveHeader(name);
  });

  App.addInitializer(function(){
    API.listHeader();
  });
});
