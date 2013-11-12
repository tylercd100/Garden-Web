App.module("Overview.Show", function(Show, App, Backbone, Marionette, $, _){
  Show.Main = Marionette.ItemView.extend({
    template: "#overview-main",
    className: "overview-main",
  });
});
