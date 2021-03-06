var express = require('express'),
	http = require('http'),
	path = require('path'),
	app = express(),
	bodyParser = require('body-parser'),
	fs = require('fs'),
	mustacheLayout = require("mustache-layout");

app.set('port', process.env.PORT || 3002);

	
// some environment variables
app.locals({
	"title": "Demo mustache layout with express"
});
app.set('views', './view');
app.set('view engine', 'html');
app.set("view options", {layout: true});
app.engine("html", mustacheLayout);

//app.use(express.favicon());
// app.use(express.logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.cookieParser('your secret here'));
app.use(bodyParser.json());
app.use(express.methodOverride());
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
	console.log("testing..");
	res.render("index", {
		time: new Date().toString()
	});
});

app.listen(3002);
