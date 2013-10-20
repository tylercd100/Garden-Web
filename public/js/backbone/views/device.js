define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
	var View = Backbone.View.extend({
    className : "device-view",
    initialize : function(options){
    	this.model.on('change',this.render,this);
    },
    events:{
      'click .btn[attribute=state]':'onClickBtnState',
    },
    onClickBtnState:function(e){
      console.log('clicked')
      var s = this.model.get('state');
      s = !s;
      this.model.set('state',s);
    },
    render: function(){
    	var html = this.template({
        device: this.model,
      });

      $(this.el).html(html);

      return this;
    },
    template: _.template([
      '<%= device.get(\'type\') %>',
    ].join('')),
  });
  return View;
});
