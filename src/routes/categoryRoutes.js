const express = require('express');
const CategoryController = require('../controllers/categoryController');
const {authenticateJWT, authorizeAdmin} = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', CategoryController.createCategory);
router.get('/all', CategoryController.getAllCategories);


module.exports = router;