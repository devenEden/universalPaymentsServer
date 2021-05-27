const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const courseSchema =  new Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        code: 
        {
            type: Number,
            required:true
        },
        description:
        {
            type: String,
            required: true
        } 

    },{timestamps: true});

const CourseModel  = mongoose.model('course',courseSchema);

module.exports = CourseModel;