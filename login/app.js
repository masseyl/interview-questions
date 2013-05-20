/**
 * Module dependencies.
 */

var express = require('express'),
	connect = require('connect'),
	request = require('request');

var app = express();

// all environments
app.use(connect.bodyParser());
app.use(express.cookieParser());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});

app.get("/login/:user/:pwd", function (req, res) {
	var user,
		pwd,
		pass = false;

	if (req.params) {
		user = req.params.user;
		pwd = req.params.pwd;
		pass = login(user, pwd);
	}
	res.send({success:pass})
});

function login(username, password) {
	if (username === "admin" && password === "password") {
		return true;
	} else {
		return false;
	}
}