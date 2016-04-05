var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost:27017/students';

// Create the database connection
mongoose.connect(dbURI);

// On connection
mongoose.connection.on('connected', function () {
  console.log('DB connection established ' + dbURI);
});

// On connection error
mongoose.connection.on('error',function (err) {
  console.log('DB connection error occurred: ' + err);
});

// On disconnection
mongoose.connection.on('disconnected', function () {
  console.log('DB connection lost');
});

// If process is interrupted, close connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('DB disconnected through app termination');
    process.exit(0);
  });
});

// Schemas
require('./model/student');
