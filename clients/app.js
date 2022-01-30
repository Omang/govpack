var express = require('express');
var mongoose = require('mongoose');

var path = require('path');
var cors = require('cors');
var bodyparser = require('body-parser');


const route = require('./route/route');

var app = express();
//app.use(express.static(path.join(__dirname , 'public')));

mongoose.connect('mongodb://localhost:27017/clients');

mongoose.connection.on('connected', ()=>{
  console.log("Connected successfully");
})

mongoose.connection.on('error', (err)=>{
  if(err){
   console.log("Error on Connection:" +err);
  }
})


app.use(cors());

app.use(bodyparser.json());

var port = 4200;

app.use('/api', route);



app.listen(port, ()=>{
	console.log("Server running at:" +port);
});