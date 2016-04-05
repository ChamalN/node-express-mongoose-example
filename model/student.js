var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  studentId: String,
  firstName: String,
  lastName: String
});

var Student = module.exports = mongoose.model('Student', studentSchema);
