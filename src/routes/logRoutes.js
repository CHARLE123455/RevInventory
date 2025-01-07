const express = require('express');
const LogController = require('../controllers/logController');
const {authenticateJWT} = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/actions',  LogController.getAllLogsByAction);
router.get('/all', LogController.getAllLogs);
router.post('/create', LogController.createLog);

module.exports = router;