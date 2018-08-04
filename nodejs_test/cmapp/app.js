/**
 * Module dependencies.
 */
 
var express = require('express')
  , http = require('http')
  , path = require('path')
  , io = require('socket.io')
 
var app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server);

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


 // configure stuff here
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
  

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


server.listen(app.get('port'))
 
io.sockets.on('connection', function(socket) {
  socket.on('message:send', function(data) {
    io.sockets.emit('message:receive', { message: data.message });
  });
});