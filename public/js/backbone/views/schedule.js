define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
  var View = Backbone.View.extend({
    className : "schedule-view",
    initialize : function(options){
      this.model.on('change',this.render,this);
    },
    render: function(){
      var html = this.template({
        schedule: this.model,
      });

      $(this.el).html(html);

      return this;
    },
    template: _.template([
      'Schedule: Turns on <%= (schedule.get(\'day\') != 0? schedule.get(\'day\') : "Everyday") %> for ',
      '<% d = schedule.get("duration"); %><%= (d >= 60 * 60 ? (d/60/60) + " Hours" : (d >= 60 ? (d/60) + " Minutes" : d + " Seconds")) %>',
    ].join('')),
  });
  return View;
});
