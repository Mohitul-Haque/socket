var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var nets = require('net');
var val = 0;
var val1=0;
var c=0;
var HOST = '127.0.0.1';
var PORT = 6969;

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('socket.html');
});

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
nets.createServer(function(sock) {
    
    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    
    // Add a 'data' event handler to this instance of socket
    sock.on('data', function(data) {
        
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Write the data back to the socket, the client will receive it as data from the server
        val = JSON.parse(data);
        val1 = JSON.stringify(data);
        //val = data;
        console.log(val.name);
        console.log(val.age);
        c='name:'+val.name;
        sock.write('data found: ' + data);
        
        
    });
    
    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });
    
}).listen(PORT, HOST);

io.on('connection', function(socket){
    //send data to client
    setInterval(function(){
        //var val = Math.floor(1000 + Math.random()*9000);
        socket.emit('date', {'date': (c)});
    }, 1000);
  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });

});

http.listen(6969, function(){
  console.log('listening on localhost:6969');
});

console.log('Server listening on ' + HOST +':'+ PORT);