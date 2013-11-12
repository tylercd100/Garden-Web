App.module("Overview", function(Overview, App, Backbone, Marionette, $, _){
  Overview.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "overview" : "showOverview"
    }
  });

  var API = {
    showOverview: function(){
      Overview.Show.Controller.showOverview();
      App.execute("set:active:header", "overview");
    }
  };

  App.on("overview:show", function(){
    App.navigate("overview");
    API.showOverview();
  });

  App.addInitializer(function(){
    new Overview.Router({
      controller: API
    });
  });
});
