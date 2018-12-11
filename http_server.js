var http = require('http');
var dt = require('./my_first_module')
var fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});

server.listen(port);