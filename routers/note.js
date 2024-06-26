const path = require('path');
const express = require('express');
const router = express.Router();

const noteController = require('../controllers/note');

router.get('/', noteController.getIndex);
router.get('/create-note', noteController.getCreateNote);
router.get('/view-note/:noteId', noteController.getViewNote);
router.post('/add-note', noteController.addNote);
router.post('/edit-note/:noteId', noteController.postEditNotes);

module.exports = router;