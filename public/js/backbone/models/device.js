define([
	'underscore',
	'backbone',
], function(_, Backbone){
	var Model = Backbone.Model.extend({
		urlRoot:'/public/device',
		initialize: function(attributes,options){
		},
	});
	return Model;
});
