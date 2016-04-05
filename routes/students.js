var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Student = mongoose.model('Student');

// get all students
router.get('/', function(req, res) {
  Student.find({}, 'studentId firstName lastName', function(err, students) {
    if(err) {
      console.log("Could not retrieve students");
    } else {
      res.json(students);
    }
  });
});

// create new student
router.post('/', function(req, res) {
  console.log(req.body);
  var student = new Student(req.body);
  student.save(function(err, student) {
    if(err) {
      console.log("Could not create new student: " + err);
    } else {
      res.json(student);
    }
  });
});

// get student by id
router.get('/:studentId', function(req, res) {
  Student.findOne({ studentId: req.params.studentId }, 'studentId firstName lastName', function(err, student) {
    if(err) {
      console.log("Could not retrieve student");
    } else {
      res.json(student);
    }
  });
});

module.exports = router;
