const express = require('express');
const ItemController = require('../controllers/itemController');
const {authenticateJWT, authorizeAdmin} = require('../middleware/authMiddleware');
const router = express.Router();
const {upload, handleUploadError} = require('../utils/cloudinary');


/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - quantity
 *         - imageUrl
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID
 *         name:
 *           type: string
 *           description: Item name
 *         price:
 *           type: number
 *           format: float
 *           description: Item price
 *         quantity:
 *           type: integer
 *           description: Available quantity
 *         imageUrl:
 *           type: string
 *           description: URL of item image
 *         categoryId:
 *           type: integer
 *           description: Category ID
 */

/**
 * @swagger
 * /api/items/create:
 *   post:
 *     summary: Create a new item
 *     security:
 *       - bearerAuth: []
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               quantity:
 *                 type: integer
 *               imageUrl:
 *                 type: string
 *                 format: binary
 *               categoryId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Item created successfully
 *       500:
 *         description: Server error
 */
router.post('/create', upload.single('imageUrl'), handleUploadError, ItemController.createItem);

/**
 * @swagger
 * /api/items/update/{id}:
 *   put:
 *     summary: Update item quantity
 *     security:
 *       - bearerAuth: []
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Item updated successfully
 *       404:
 *         description: Item not found
 */
router.put('/update/:id', ItemController.updateItemQuantity);

/**
 * @swagger
 * /api/items/sell/{id}:
 *   post:
 *     summary: Sell an item
 *     security:
 *       - bearerAuth: []
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantitySold:
 *                 type: integer
 *               buyer:
 *                 type: string
 *     responses:
 *       200:
 *         description: Item sold successfully
 *       404:
 *         description: Item not found
 */
router.post('/sell/:id', ItemController.sellItem);


module.exports = router;