const express = require('express');
const documentController =  require('../../controllers/documents/documentController');

const router = express.Router();

router.get('/',documentController.document_index);
router.post('/create',documentController.document_create_post);
router.put('/:documentId',documentController.document_update);
router.get('/:documentId',documentController.document_details);
router.delete('/:documentId',documentController.document_delete);

module.exports = router;