const express = require('express');
const LogController = require('../controllers/logController');
const {authenticateJWT} = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/actions', authenticateJWT, LogController.getAllLogsByAction);

module.exports = router;