const express = require('express');
const studentController = require('../../controllers/students/studentController');
const router = express.Router();

router.get('/',studentController.student_index);
router.post('/create',studentController.student_create_post);
router.get('/:studentId',studentController.student_details);
router.put('/:studentId',studentController.student_update);
router.delete('/:studentId', studentController.student_delete);

module.exports = router;

