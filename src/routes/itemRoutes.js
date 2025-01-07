const express = require('express');
const ItemController = require('../controllers/itemController');
const {authenticateJWT, authorizeAdmin} = require('../middleware/authMiddleware');
const router = express.Router();
const {upload, handleUploadError} = require('../utils/cloudinary');


router.post('/create', upload.single('imageUrl'),handleUploadError, ItemController.createItem);
router.put('/update/:id', ItemController.updateItemQuantity);
router.post('/sell/:id', ItemController.sellItem);

module.exports = router;