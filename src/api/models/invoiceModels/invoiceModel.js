const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    invoiceId:{
        required:true,
        type:String
    },
    totalAmount:{
        type: Number,
        required: true
    },
    student: {
        type: String,
        required: true
    }
},{timestamps: true});

const Invoice = mongoose.model('invoice',invoiceSchema);

module.exports = Invoice;