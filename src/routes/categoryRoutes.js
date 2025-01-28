const express = require('express');
const CategoryController = require('../controllers/categoryController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: The category management API
 * /api/v1/category/create:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: The created category.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Invalid request payload
 *       500:
 *         description: Some server error
 */
router.post('/create', CategoryController.createCategory);

/**
 * @swagger
 * /api/v1/category/all:
 *   get:
 *     summary: Retrieve all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: A list of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
 */
router.get('/all', CategoryController.getAllCategories);

module.exports = router;
