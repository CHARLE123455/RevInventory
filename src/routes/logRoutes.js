const express = require('express');
const LogController = require('../controllers/logController');
const {authenticateJWT} = require('../middleware/authMiddleware');
const { getLogsByAction } = require('../middleware/logMiddleware');
const router = express.Router();



router.get('/all', LogController.getAllLogs);
router.get('/actions', getLogsByAction, (req, res) => {
    res.status(200).json(res.locals.logs);
});


module.exports = router;
