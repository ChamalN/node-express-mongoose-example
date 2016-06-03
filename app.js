var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/status', function (req, res) {
  res.json({"status":"ok"});
});

app.listen(80, function() {
  console.log('App started on port 8080...')
});
