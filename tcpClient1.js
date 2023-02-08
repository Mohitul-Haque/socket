var net = require('net');
var dummyjson = require('dummy-json');
var template = '{\
	"name": {{firstName}},\
	"age": {{int 18 65}}\
  }';
var HOST = '127.0.0.1';
var PORT = 6969;
//var gps = {'name':'user1', 'long': '34.5', 'lat': '43.5' }
//var myJSON = JSON.stringify(gps);

var client = new net.Socket();
setInterval(function(){ client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client 
var val = Math.floor(1000 + Math.random()*9000);
var val1 = Math.floor(1000 + Math.random()*9000);
var result={'name':val,'age':val1};
var myJSON = JSON.stringify(result);
console.log(myJSON); 

client.write(myJSON);
        //val = data;
        


});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {
    
    console.log('DATA: ' + data);
    // Close the client socket completely
    client.destroy();
    
});}, 3000); 

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
});