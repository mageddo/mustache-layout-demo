var express = require('express'),
	http = require('http'),
	path = require('path'),
	app = express(),
	bodyParser = require('body-parser'),
	fs = require('fs'),
	mustache = require("mustache");








	
// some environment variables
app.set('port', process.env.PORT || 3002);
app.set("title", "Demo mustache layout with express");
app.set('views', __dirname + '/view');
app.set('view engine', 'html');
app.set("view options", {layout: true});
app.engine("html", function(file, rootData, next){

	var that = this;
	console.log("file: ", file, "\n");
	console.log("rootData: ", rootData, "\n");
	console.log("next: ", next, "\n");
	console.log("arguments: ",arguments);
	console.log("this: ", this, "\n--------------------------------------\n\n");
	

	//console.log("eae", arguments, this, this.engine.toString());

	var templateHtml;
	var files = {
		layout: null,
		view: null
	};

	if(rootData.layout !== false){
		if(rootData.layout){
			files.layout = getPath(rootData.layout);
		}else if(rootData.settings['view options'] && rootData.settings['view options'].layout){
			files.layout = getPath('layout');
		}
	}
	files.view = getPath(that.name);

	if(files.layout){
		fs.exists(files.layout, function(is){
			if(is){
				console.log("compilando com layout...");
				fs.readFile(files.layout, function(err, data){
					if(!err){
						templateHtml = data.toString();
						loadFile(templateHtml);
					}
				});
			}else{
				console.log("não existe arquivo de layout %s", files.layout);
				loadFile();
			}
		});
	}else{
		console.log("o uso de layout está desativado");
		loadFile();
	}

	function loadFile(template){
		fs.exists(files.view, function(is){
			fs.readFile(files.view, function(err, data){
				if(template){
					rootData.body = data.toString();
					console.log("compilando com layout e com view...");
					render(template, rootData);
				}else{
					console.log("compilando sem layout e com view...");
					render(data.toString(), rootData);
				}
			});
		})
	}

	function getPath(view){
		return that.root + "/" + view + that.ext;
	}

	function render(templateHtml, options){
		console.log("renderizando...\n", templateHtml, "\n---------------\n", options);
		try{
			next(null, mustache.to_html(templateHtml, options));
		}catch(err){
			next(err);
		}
	}

});
//app.set('layout', 'layout');

//app.use(express.favicon());
// app.use(express.logger('dev'));
app.use(mustache)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.cookieParser('your secret here'));
app.use(bodyParser.json());
app.use(express.methodOverride());
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
	res.render("index", {
		nome: "elvis"
	});
});

app.listen(3002);
