const express = require('express');
const invoiceController = require('../../controllers/invoices/invoiceController');

const router = express.Router();

router.post('/create' , invoiceController.invoice_create_post);
router.get('/search/:q',invoiceController.invoice_search);

module.exports = router;