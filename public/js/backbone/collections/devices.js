define([
  'jquery', 
  'underscore', 
  'backbone',
  'models/device',
], function( $, _, Backbone, Model){
	var Collection = Backbone.Collection.extend({
		url:'/public/device',
		model: Model,
	})
	
	return Collection;
})
