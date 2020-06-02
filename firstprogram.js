var http = require('http');
var Addition=require('./Addition.js');
var express=require('express');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(3000);


var app=express();
app.set('view engine','jade');
app.get('/',(req,res)=> {
});

var server=app.listen(3000,()=> {
});


console.log(Addition.AddNumber(1,2));