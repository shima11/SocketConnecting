var hello = require('./hello.js');
console.log(hello.sayHello());

var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end("hello world http\n");
}).listen(1337,'127.0.0.1');

console.log('server running 127.0.0.1');