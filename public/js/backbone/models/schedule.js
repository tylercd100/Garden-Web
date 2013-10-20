define([
	'underscore',
	'backbone',
], function(_, Backbone){
	var Model = Backbone.Model.extend({
		urlRoot:'/public/schedule',
		initialize: function(attributes,options){
		},
	});
	return Model;
});
