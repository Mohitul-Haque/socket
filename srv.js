var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('socket.html');
});

//Whenever someone connects this gets executed

io.on('connection', function(socket){
    //send data to client
    setInterval(function(){
    	var val = Math.floor(1000 + Math.random()*9000);
        socket.emit('date', {'date': val});
    }, 1000);
  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});