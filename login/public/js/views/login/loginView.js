define([
	'jquery',
	'underscore',
	'backbone',
	'mustache',
	'models/loginModel',
	'text!templates/login/login.html'
], function ($, _, Backbone, M, LoginModel, LoginTemplate) {

	var loginView = Backbone.View.extend({
		el: $("#container"),

		events: {
			"click fieldset .submit": "login"
		},

		login: function (event) {
			var name,
				pwd;

			name = $(".username", this.el).val();
			pwd = $(".password", this.el).val();
			this.model.set({name: name, pwd: pwd});
			this.model.fetch({
				success: function (result) {
					var pass = result.get("success");
					if (pass) {
						$(".alert-success", this.el).addClass("show");
						$(".alert-error", this.el).addClass("hide").removeClass("show");
					} else {
						$(".alert-error", this.el).addClass("show");
						console.log("FAIL");
					}
				}
			});
		},

		initialize: function (args) {
			this.model = new LoginModel();
			this.render();
		},

		render: function (data) {
			$(this.el).html(M.to_html(LoginTemplate));
		}

	});

	return loginView;

});
