const express = require('express');
const ItemController = require('../controllers/itemController');
const {authenticateJWT, authorizeAdmin} = require('../middleware/authMiddleware');
const upload = require('../utils/s3Service');
const router = express.Router();


router.post('/create', upload.single('image'), ItemController.createItem);
router.put('/update/:id', ItemController.updateItemQuantity);
router.post('/sell/:id', ItemController.sellItem);

module.exports = router;