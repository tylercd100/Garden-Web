App.module("Charts", function(Charts, App, Backbone, Marionette, $, _){
  Charts.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "charts" : "listCharts"
    }
  });

  var API = {
    listCharts: function(){
      Charts.List.Controller.listCharts();
      App.execute("set:active:header", "charts");
    }
  };

  App.on("charts:list", function(){
    App.navigate("charts");
    API.listCharts();
  });

  App.addInitializer(function(){
    new Charts.Router({
      controller: API
    });
  });
});
