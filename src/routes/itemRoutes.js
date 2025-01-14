const express = require('express');
const ItemController = require('../controllers/itemController');
const {authenticateJWT, authorizeAdmin} = require('../middleware/authMiddleware');
const router = express.Router();
const {upload, handleUploadError} = require('../utils/cloudinary');
const { logMiddleware } = require('../middleware/logMiddleware');


router.post('/create', upload.single('imageUrl'), handleUploadError,logMiddleware, ItemController.createItem);
router.put('/update/:id',logMiddleware, ItemController.updateItemQuantity);
router.post('/sell/:id',logMiddleware, ItemController.sellItem);


module.exports = router;
