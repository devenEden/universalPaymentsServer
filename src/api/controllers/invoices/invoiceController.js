const apiError = require('../../errors/apiErrors');
const isNumber = require('../../validations/numberValidation');
const Invoice = require('../../models/invoiceModels/invoiceModel');

const invoice_create_post = (req,res,next) => {
    const { totalAmount , student , invoiceId } = req.body;

    if (!totalAmount || !student || !invoiceId){
        next(apiError.badRequest('All fields are required'));
        return;
    }
    else{
      if (isNumber(totalAmount)) {
        if (totalAmount > 0) {
            
            const newInvoice = new Invoice(req.body);

            newInvoice.save()
            .then( response => {
                res.json({response, msg: 'Success'});
            })
            .catch( err => console.log(err));

        } else {
            res.json({error: 'Please select a document '}); 
        } 
      } else {
          res.json({error: 'Please enter a number for totalAmount'});
      }
    }
}

const invoice_search = (req,res) => {
    Invoice.find({invoiceId:req.params.q}, (err,data) => {
        if (err) {
            console.log(err);
        } else {
            if (data.length > 0) {
                res.json({response:data,msg:'Success'});
            } else {
                res.json({error:"No records found"});
            }
        }
    })
    .sort({student: 1});
}

module.exports = {
    invoice_create_post,
    invoice_search
}