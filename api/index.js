const express = require('express');
const app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.get('/', (req, res) => res.send('Hello World!'));

app.listen( port );

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('message', function(msg){
        socket.broadcast( msg );
    })
});