var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  studentId: {
    type:Number,
    required:true // required parameter
  },
  firstName: {
    type:String,
    required:true // required parameter
  },
  lastName: {
    type:String,
    required:true // required parameter
  },
  class: {
    type:String,
    enum:['A', 'B', 'C'] // only these values are accepted
    // null will be accepted since this is not a required parameter
  },
  registeredDate: {
    type:Date,
    default:Date.now // default value set to current time
  }
});

var Student = module.exports = mongoose.model('Student', studentSchema);
