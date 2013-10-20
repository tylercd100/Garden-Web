var App = {}
App.Views = {}
App.Collections = {}
App.Models = {}

require.config({
	//baseUrl: '/js/back',
	paths: {
		jquery: 'libs/jquery.min',
		underscore: 'libs/underscore.min',
		backbone: 'libs/backbone.min',
		'jquery.bootstrap': 'libs/bootstrap.min',
	},

	shim: {
		"jquery": {
            exports: "$"
        },
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ['jquery', 'underscore'],
            exports: "Backbone"
        },
		'jquery.bootstrap':{
			deps: ['jquery'],
		},
	},

});

requirejs.onError = function (err) {
	console.error(err);
	// window.onRequirejsError(err)
};

require([
	'app', 
], function(App, $){
	App.initialize();
});