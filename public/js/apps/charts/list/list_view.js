App.module("Charts.List", function(List, App, Backbone, Marionette, $, _){
	List.Main = Marionette.Layout.extend({
		template: "#charts-main",
		className: "charts-main container",
		onBeforeRender:function(){
			var self = this;
			_.each(self.collection.models,function(m){
				var n = m.get('name')
				self.addRegion(n+'Region','#'+n+'-region');
			})
		},
	});
});
