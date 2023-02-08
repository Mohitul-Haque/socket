var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;
var gps = {'name':'user2', 'long': '34.5', 'lat': '43.5' }
var myJSON = JSON.stringify(gps);

var client = new net.Socket();

var dummyjson = require('dummy-json');
var template = '{\
	"name": {{firstName}},\
	"age": {{int 18 65}}\
  }';

client.connect(PORT, HOST, function() {
	for (var x=0; x<100; x++){
		console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    	// Write a message to the socket as soon as the client is connected, the server will receive it as message from the client 
    	var result = dummyjson.parse(template);
    	var myJSON = JSON.stringify(result);
		console.log(myJSON); 
		client.write(myJSON);
	};
    
});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {
    
    console.log('DATA: ' + data);
    // Close the client socket completely
    client.destroy();
    
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
});