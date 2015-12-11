var express = require('express');
var browserify = require('browserify-middleware');
var bodyParser = require('body-parser');

var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


/* Part 1
app.get('/bundle.js', function(req, res){
  res.sendFile(__dirname + '/bundle.js');  
});
*/
app.get('/bundle.js', browserify(__dirname + '/answer3.js'));


// Items
var items = ['Item a', 'Item b', 'Item c'];

app.get('/items', function (req, res, next) {
  res.json(items);
});


//Create
app.put('/items/create', bodyParser.json(), function (req, res, next) {
  //console.dir(req.body);
  items.push(req.body.item);
  //res.json(items);
});


app.listen(3000);