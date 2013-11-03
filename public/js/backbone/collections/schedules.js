define([
  'jquery', 
  'underscore', 
  'backbone',
  'models/schedule',
], function( $, _, Backbone, Model){
	var Collection = Backbone.Collection.extend({
		url:'/public/schedule',
		model: Model,
	})
	
	return Collection;
})
