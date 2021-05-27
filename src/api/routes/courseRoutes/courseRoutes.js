/** Index Routing File */
const express = require('express');
const courseController = require('../../controllers/courses/courseController')
const router = express.Router();

router.get('/',courseController.course_index);
router.post('/create',courseController.course_create_post)
router.get('/:courseId',courseController.course_details);
router.put('/:courseId',courseController.course_update);
router.delete('/:courseId',courseController.course_delete);

module.exports = router;