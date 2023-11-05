const express = require('express');
const router = express.Router();
const catchAsync = require("../middlewares/errors");
const NotesController = require("../controllers/notesController")

// GET /notes/:idUser
router.get('/:idUser', catchAsync(NotesController.findAll));

// POST /notes
router.post('/', catchAsync(NotesController.create));

// PUT /notes/:slug
router.put('/:idUser/:slug', catchAsync(NotesController.update));

// DELETE /notes/:slug
router.delete('/:idUser/:slug', catchAsync(NotesController.remove));

module.exports = router;