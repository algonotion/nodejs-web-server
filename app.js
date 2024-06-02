const http = require('node:http');
const fs = require('node:fs');
const { readFile } = require('node:fs/promises');

const server = http.createServer((req, res) => {
	if(req.method === 'GET'){
		switch(req.url){
			case '/':
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end('Home Page');
				break;
			default:
				res.writeHead(404, 'Not found', { 'Content-Type': 'text/plain'});
				res.end('404 Not found');
		}
	}
})

server.on('connection', (socket) => {
	console.log('connection established');
});

server.listen(8000);
