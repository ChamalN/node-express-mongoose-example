var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var Student = mongoose.model('Student');

// get all students
router.get('/', function(req, res) {
  Student.find({}, 'studentId firstName lastName', function(err, students) {
    if(err) {
      console.log("Could not retrieve students: " + err);
      res.json(err);
    } else {
      res.json(students);
    }
  });
});

// create new student
router.post('/', function(req, res) {
  var student = new Student(req.body);
  student.save(function(err, student) {
    if(err) {
      console.log("Could not create new student: " + err);
      res.json(err);
    } else {
      res.json(student);
    }
  });
});

// get student by id
router.get('/:studentId', function(req, res) {
  Student.findOne({ studentId: req.params.studentId }, 'studentId firstName lastName', function(err, student) {
    if(err) {
      console.log("Could not retrieve student: " + err);
      res.json(err);
    } else {
      res.json(student);
    }
  });
});

// delete student by id
router.delete('/:studentId', function(req, res) {
  Student.remove({ studentId: req.params.studentId }, function(err, student) {
    if(err) {
      console.log("Could not retrieve student: " + err);
      res.json(err);
    } else {
      res.json(student);
    }
  });
});

module.exports = router;
