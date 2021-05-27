/** Student Controller */
const Student = require('../../models/studentModels/studentModel');
const apiError = require('../../errors/apiErrors');

//get all Students 
const student_index = (req, res) => {
    Student.find()
    .then( response => { 
        res.json(response); 
    })
    .catch(err => console.log(err))

}
//add new student
const student_create_post = (req,res,next) => {
    const { firstName, otherNames , sex , course   } = req.body;
    if (!firstName ||  !otherNames || !sex || !course) {
        next(apiError.badRequest("All fields are required"));
        return;
    } else {
      const newStudent = new Student(req.body);
       newStudent.save()
       .then(response => {
           res.json({response,msg:'Success'});
       })
       .catch( err => console.log(err))
    }
}
// get one student
const student_details = (req,res) => {
  Student.findById(req.params.studentId)
  .then(response => {
      res.json({response,msq:"Success"});
  })
  .catch(err => console.log(err));
}

//update student 
const student_update = (req,res,next) => 
{

    const { firstName, otherNames , sex , course   } = req.body;
    if (!firstName ||  !otherNames || !sex || !course) {
        next(apiError.badRequest("All fields are required"));
        return;
    }
    else { 
    Student.updateOne({_id: req.params.studentId},req.body, (err,response) => {
      if (err) {
          console.log(err);
      }
      else {
          res.json({response,msg: 'Success'});
      }
    });
}
}

//delete record 
const student_delete = (req,res) => {
    Student.deleteOne({_id: req.params.studentId}, (err,response) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({response,msg: 'Success'});
        }
      });
}

module.exports = 
{
    student_index,
    student_create_post,
    student_details,
    student_delete,
    student_update
}