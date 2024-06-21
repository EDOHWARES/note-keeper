const path = require('path');
const express = require('express');
const router = express.Router();

const noteController = require('../controllers/note');

router.get('/', noteController.getIndex);
router.get('/create-note', noteController.getCreateNote)

module.exports = router;