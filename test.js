/*var dummyjson = require('dummy-json');

setInterval(function(){ var val = Math.floor(1000 + Math.random()*9000);
var val1 = Math.floor(1000 + Math.random()*9000);
var result={'name':val,'age':val1};
var myJSON = JSON.stringify(result);
console.log(myJSON); 

client.write(myJSON);
        //val = data;
        
}, 1000);*/ // Returns a string

var sleep = require('sleep');
while(1){
sleep.sleep(2);
var val = Math.floor(1000 + Math.random()*9000);
var val1 = Math.floor(1000 + Math.random()*9000);
var result={'name':val,'age':val1};
var myJSON = JSON.stringify(result);
console.log(myJSON);};