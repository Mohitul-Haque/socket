var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var count =0;

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('A user connected');
  //Send a message when 
  setTimeout(function(){
    //Sending an object when emmiting an event
  socket.emit('testerEvent', { description: count + 'A custom event named testerEvent!'});
  }, 4000);
  socket.on('disconnect', function () {
    count++;
    console.log('A user disconnected');
  });
});

http.listen(8000, function(){
  console.log('listening on localhost:3000');
});