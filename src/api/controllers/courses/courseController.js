/** course controller */
const apiError = require('../../errors/apiErrors');
const { json } = require("express");
const Course = require('../../models/courseModels/courseModel');
const isNumber = require('../../validations/numberValidation');

//get all records 
const course_index = (req,res) => {
        Course.find()
        .then((response) => { res.json({ response , msg : 'Success' })})
        .catch( err => console.log(err) );
}

//add new record
const course_create_post = (req,res,next) => {

    const { name , description , code  } = req.body;

    if(!name || !description ||  !code ) {
        next(apiError.badRequest("All fields are requied"));
        return;
    }
    else {
      if (isNumber(code)) {
        Course.exists({name:name  }, (err,doc) => {
          if(err) {
            console.log(err);
            res.json('Internal Server Error');
          }
          else {
           if (!doc) {
            Course.exists({code:code}, (err,doc) => {
              if (err) {
                res.json("Internal Server Error")
              } 
              else {
                if (!doc) {

                  try {

                    const newCourse =  new Course(req.body);
                      newCourse.save()
                      .then( (result) => {res.json({result,msg:"Success"});})
                      .catch( (err) => {console.log(err);});

                  } catch (error) {
                    console.log(error);
                  }
                } else {
                    res.json({ error: `code ${ code } already exists, Please select another course code `,doc}); 
                }
              }
            });
           } 
           else {
             res.json({ error: `Course ${ name } already exists, Please select another course name`,doc});
           }
          }
        });
      } 
      else {
        
        next(apiError.badRequest("Please enter a number for code"));
        return;
      }
    }

}

//get single course
const course_details =  (req, res) => {
 Course.findById(req.params.courseId)
 .then( response => {
      res.json({response, msg:'Success'});
 })
 .catch(err => console.log(err));
}

//update course 
const course_update = (req, res , next) => {
  const { name , description , code  } = req.body;

    if(!name || !description ||  !code ) {
        next(apiError.badRequest("All fields are requied"));
        return;
    }
    else {
      Course.updateOne({_id: req.params.courseId},req.body,(err, response) => {

      if (err) {
        console.log(err);
      } else {
        res.json({response,msg:"Success"})
      }

      });
  }
}
//delete courses 
const course_delete = (req,res) => 
{
  Course.deleteOne({_id: req.params.courseId},(err, response) => {
    if (err) {
      console.log(err);
    } else {
      res.json({response,msg:"Success"})
    }
   })
}

module.exports = 
{
    course_index,
    course_create_post,
    course_details,
    course_update,
    course_delete
}