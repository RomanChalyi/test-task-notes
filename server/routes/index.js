const express = require('express');
const router = express.Router();
const getAllNotes = require('../middleware/getAllNotes');
const getNotes = require('../middleware/getNote');

router.get('/all', getAllNotes);
router.get('/:id', getNotes);

module.exports = router;