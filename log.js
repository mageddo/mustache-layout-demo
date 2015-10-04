file:  /home/system/Dropbox/dev/testes/node-express-mustache-demo/002/view/index.html 

rootData:  { settings: 
   { 'x-powered-by': true,
     etag: 'weak',
     'etag fn': [Function: wetag],
     env: 'development',
     'subdomain offset': 2,
     'trust proxy': false,
     'trust proxy fn': [Function: trustNone],
     view: [Function: View],
     views: '/home/system/Dropbox/dev/testes/node-express-mustache-demo/002/view',
     'jsonp callback name': 'callback',
     'json spaces': 2,
     port: 3002,
     'view engine': 'html',
     'view options': { layout: true } },
  title: 'Demo mustache layout with express',
  time: 'Sun Oct 04 2015 17:06:32 GMT-0300 (BRT)',
  _locals: [Function: locals],
  cache: false } 

next:  function (err, str){
    if (err) return req.next(err);
    self.send(str);
  } 

arguments:  { '0': '/home/system/Dropbox/dev/testes/node-express-mustache-demo/002/view/index.html',
  '1': 
   { settings: 
      { 'x-powered-by': true,
        etag: 'weak',
        'etag fn': [Function: wetag],
        env: 'development',
        'subdomain offset': 2,
        'trust proxy': false,
        'trust proxy fn': [Function: trustNone],
        view: [Function: View],
        views: '/home/system/Dropbox/dev/testes/node-express-mustache-demo/002/view',
        'jsonp callback name': 'callback',
        'json spaces': 2,
        port: 3002,
        'view engine': 'html',
        'view options': [Object] },
     title: 'Demo mustache layout with express',
     time: 'Sun Oct 04 2015 17:06:32 GMT-0300 (BRT)',
     _locals: [Function: locals],
     cache: false },
  '2': [Function] }
this:  { name: 'index',
  root: '/home/system/Dropbox/dev/testes/node-express-mustache-demo/002/view',
  defaultEngine: 'html',
  ext: '.html',
  engine: [Function],
  path: '/home/system/Dropbox/dev/testes/node-express-mustache-demo/002/view/index.html' } 
--------------------------------------


compilando com layout...
compilando com layout e com view...
renderizando...
 <html>
	<head>
		<title>{{title}}</title>
	</head>
	<body>
		{{>body}}
	</body>
</html> 
---------------
 { settings: 
   { 'x-powered-by': true,
     etag: 'weak',
     'etag fn': [Function: wetag],
     env: 'development',
     'subdomain offset': 2,
     'trust proxy': false,
     'trust proxy fn': [Function: trustNone],
     view: [Function: View],
     views: '/home/system/Dropbox/dev/testes/node-express-mustache-demo/002/view',
     'jsonp callback name': 'callback',
     'json spaces': 2,
     port: 3002,
     'view engine': 'html',
     'view options': { layout: true } },
  title: 'Demo mustache layout with express',
  time: 'Sun Oct 04 2015 17:06:32 GMT-0300 (BRT)',
  _locals: [Function: locals],
  cache: false }
