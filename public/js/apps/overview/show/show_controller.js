App.module("Overview.Show", function(Show, App, Backbone, Marionette, $, _){
  Show.Controller = {
    showOverview: function(){
      var view = new Show.Main();
      App.mainRegion.show(view);
      view.$el.find('.has-tooltip').tooltip({placement:'bottom'});
    }
  };
});
