define([
  'jquery',
  'underscore',
  'backbone',
  'views/device',
], function($, _, Backbone, Parent){
	var View = Parent.extend({
    className : "device-view light-view",
    initialize : function(options){
    	this.model.on('change',this.render,this);
    },
    template: _.template([
      '<h2><%= device.get(\'name\') %> <span class="capitalize"><%= device.get(\'type\') %></span></h2>',
      '<div class="btn-group">',
        '<button type="button" attribute="state" class="btn <%= (device.get(\'state\') == 1 ? \'btn-primary\' : \'btn-default\') %> btn-lg">On</button>',
        '<button type="button" attribute="state" class="btn <%= (device.get(\'state\') == 0 ? \'btn-primary\' : \'btn-default\') %> btn-lg">Off</button>',
      '</div>',
      '<div holds="schedule-view"></div>'
    ].join('')),
  });
  return View;
});
