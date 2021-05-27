const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const documentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    unitAmount: {
        type: String,
        requred: true
    }

},{timestamps: true});

const Document = mongoose.model('document',documentSchema);

module.exports = Document;