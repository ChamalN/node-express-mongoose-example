var express = require('express');
var bodyParser = require('body-parser');

//var db = require('./db');

//var students = require('./routes/students');

var app = express();

app.use(bodyParser.json());
//app.use('/students', students);

app.get('/status', function (req, res) {
  res.json({"status":"ok"});
});

app.listen(8080, function() {
  console.log('App started on port 8080...')
});
