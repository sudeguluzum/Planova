const express = require('express');
const router = express.Router();
const noteController = require("../controllers/noteController");
const { verifyToken } = require('../middleware/authMiddleware');

// router'lar
router.get('/', verifyToken, noteController.getUserNotes);
router.post('/', verifyToken, noteController.addNote);
router.delete('/:id', verifyToken, noteController.deleteNote);

module.exports = router;