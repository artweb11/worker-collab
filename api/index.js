var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.end('Hello world');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

http.listen( port, function(){
  console.log('listening on *:3000');
});