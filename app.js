const Addition=require('./Addition.js');
const localTutor=require('./nodetutorial.js');
const http=require('http')
const request=require('request')
var express=require('express');
var MongoClient = require('mongodb').MongoClient


var app=express();
connectionString = process.env.mongo_connection_key


// console.log(Addition.AddNumber(1,2));

// var tut = new localTutor.NodeTutorial();  // Create and save object


// MIDDLEWARE

app.set('view engine','jade');




request("http://www.google.com",function(error,response,body)
{
    //console.log(body);
    // console.log('hihi');
});

app.route('/Node').get(function(req,res)
{
    res.send("Tutorial on Node");
});
app.route('/Angular').get(function(req,res)
{
    res.send("Tutorial on Angular");
});
// default
app.get('/',function(req,res){
    
    res.render('index',
    {title:'Dan\'s site',message:'Welcome'});

    // console.log(req);
});




var server=app.listen(3000,function() {});