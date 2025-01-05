const exports = require('express');
const LogController = require('../controllers/logController');
const {authenticateJWT} = require('../middleware/authMiddleware');
const router = exports.Router();

router.get('/actions', authenticateJWT, LogController.getAllActions);

module.exports = router;