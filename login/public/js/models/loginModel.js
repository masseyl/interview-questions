define([
	'underscore',
	'backbone'
], function (_, Backbone) {

	var LoginModel = Backbone.Model.extend({

		url:function () {
			var name = this.get("name") || "fail",
				pwd = this.get("pwd") || "fail";

			return "/login/"+ name + "/" + pwd;
		},
		name: "",
		pwd:""
	});

	return LoginModel;

});