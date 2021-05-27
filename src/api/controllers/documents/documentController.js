const Document = require('../../models/documentModels/documentModel');
const apiError = require('../../errors/apiErrors');
const lengthValidation = require('../../validations/lengthValidation');
const isNumber = require('../../validations/numberValidation');

// get all documents
const document_index = (req,res) => {
    Document.find()
    .then( response => {
        res.json({response,msg:'Success'});
    })
    .catch( err => console.log(err));
}

// add new document
const document_create_post = ( req, res, next ) => {

   const { code , name , description , unitAmount} = req.body;
      parseInt(code)
   if (!code || !name || !description || !unitAmount) {
       next(apiError.badRequest('All fields are required'));
       return;
   } 
   else {
       if (isNumber(code)) {
          if (isNumber(unitAmount)) {
            if (lengthValidation(code,3,'max')) {
              Document.exists({name:name}, (err,doc) => {
                if (err) {
                    console.log(err);
                } else {
                    if (!doc) {

                       const newDocument = new Document(req.body);
                       newDocument.save()
                       .then( response => {
                           res.json({response,msg:'Success'});
                       })
                       .catch(err => console.log(err));

                    } else {
                        res.json({error:`${name} already exists, Please choose another name`});
                    }
                }
              });
           } else {
            res.json({error:"Code must not be more than 3 characters long"});
           }
        } else {
            res.json({error:"Please enter a number for Unit Amount"});
        }
       } else {
           res.json({error:"Please enter a number for code "});
       }
       
   }
}

//update document
const document_update = (req, res, next) => {

    const { code , name , description , unitAmount} = req.body;

    if (!code || !name || !description || !unitAmount) {
        next(apiError.badRequest('All fields are required'));
        return;
    } 
    else {
        Document.updateOne({_id:req.params.documentId},req.body , (err,response) => {
            if (err) {
                console.log(err);
            } else {
               res.json({response,msg: 'Success'});
            }
        });
    }
}

//get single document
const document_details = (req,res) => 
{
    Document.findById(req.params.documentId)
    .then(response => {
        res.json({response,msg:'Success'});
    })
    .catch( err => console.log(err));
}

//delete document 
const document_delete = (req,res) => 
{
    Document.deleteOne({_id:req.params.documentId},(err,response) => {
        if (err) {
            console.log(err);
        } else {
           res.json({response,msg: 'Success'});
        }
    });
}

module.exports = {
    document_index,
    document_create_post,
    document_update,
    document_details,
    document_delete
}