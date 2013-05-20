define([
	'jquery',
	'underscore',
	'backbone',
	'views/login/loginView'
], function ($, _, Backbone, LoginView) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			'login': 'login'
		}
	});
	var initialize = function () {

		var app_router = new AppRouter;

		app_router.on('route:login', function (actions) {
			var login = new LoginView();
		});

		Backbone.history.start();

	};
	return {
		initialize: initialize
	};
});
