const express = require('express');
const CategoryController = require('../controllers/categoryController');
const {authenticateJWT, authorizeAdmin} = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authenticateJWT, authorizeAdmin, CategoryController.createCategory);
router.get('/all', authenticateJWT, CategoryController.getAllCategories);


module.exports = router;