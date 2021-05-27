/** Index Routing File */
const express = require('express');
const couseRoutes =  require('./courseRoutes/courseRoutes');
const studentRoutes =  require('./studentRoutes/studentRoutes');
const documentRoutes = require('./documentRoutes/documentRoutes');
const invoiceRoutes = require('./invoiceRoutes/invoiceRoutes');
const apiErrorHandler = require('../errors/errorHandler');
const routeNotFound = require('../errors/routeNotFoundError');


const router = express.Router();

router.use('/api/courses',couseRoutes);
router.use('/api/students',studentRoutes);
router.use('/api/documents',documentRoutes);
router.use('/api/invoices',invoiceRoutes);

// bad request errors 
router.use(apiErrorHandler);

//route not found
router.use(routeNotFound);


module.exports = router;