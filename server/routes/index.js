const express = require('express');
const router = express.Router();
const getAllNotes = require('../middleware/getAllNotes');
const getNotes = require('../middleware/getNote');
const editNoteTitle = require('../middleware/editNoteTitle');
const editNoteDescription = require('../middleware/editNoteDescription');
const createNote = require('../middleware/createNote');
const deleteNote = require('../middleware/deleteNote');

router.get('/', getAllNotes);
router.get('/:id', getNotes);

router.put('/', editNoteTitle, editNoteDescription, getNotes);

router.post('/', createNote);

router.delete('/', deleteNote, getAllNotes);

module.exports = router;
