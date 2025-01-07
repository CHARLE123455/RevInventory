const express = require('express');
const LogController = require('../controllers/logController');
const {authenticateJWT} = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/actions/:action',  LogController.getAllLogsByAction);
router.post('/create', LogController.createLog);

module.exports = router;