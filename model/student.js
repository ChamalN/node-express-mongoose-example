var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  studentId: {type:Number, required:true},
  firstName: {type:String, required:true},
  lastName: {type:String, required:true},
  class: {type:String, enum:['A', 'B', 'C']}
});

var Student = module.exports = mongoose.model('Student', studentSchema);
