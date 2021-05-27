const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: 
    {
        type:String,
        required: true
    },
    otherNames: 
    {
        type:String,
        required: true
    },
    sex: 
    {
        type: String,
        required: true
    },
    course: 
    {
        type: String,
        required: true
    },
    studentNumber: 
    {
        type: String,
        required :true
    },

},{timestamps:true});

const Student = mongoose.model('student',studentSchema);

module.exports = Student;