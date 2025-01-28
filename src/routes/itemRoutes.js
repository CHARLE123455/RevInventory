const express = require('express');
const ItemController = require('../controllers/itemController');
const { upload, handleUploadError } = require('../utils/cloudinary');
const { logMiddleware } = require('../middleware/logMiddleware');
const router = express.Router();

router.post('/create', upload.single('imageUrl'), handleUploadError,logMiddleware, ItemController.createItem);
router.put('/update/:id',logMiddleware, ItemController.updateItemQuantity);
router.post('/sell/:id',logMiddleware, ItemController.sellItem);

/**
 * @swagger
 * components:
 *   schemas:
 *     ItemCreateRequest:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - quantity
 *         - imageUrl
 *         - categoryId
 *       properties:
 *         name:
 *           type: string
 *           description: Item name
 *         price:
 *           type: number
 *           description: Item price
 *         quantity:
 *           type: integer
 *           description: Available quantity
 *         imageUrl:
 *           type: string
 *           format: binary
 *           description: Item image file
 *         categoryId:
 *           type: integer
 *           description: Category ID
 *     ItemUpdateRequest:
 *       type: object
 *       required:
 *         - quantity
 *       properties:
 *         quantity:
 *           type: integer
 *           description: New quantity of the item
 *     ItemSellRequest:
 *       type: object
 *       required:
 *         - quantitySold
 *         - buyer
 *       properties:
 *         quantitySold:
 *           type: integer
 *           description: Number of items sold
 *         buyer:
 *           type: string
 *           description: Buyer's name
 */

/**
 * @swagger
 * /api/items/create:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/ItemCreateRequest'
 *     responses:
 *       201:
 *         description: Item created successfully
 *       500:
 *         description: Server error
 */
router.post('/create', upload.single('imageUrl'), handleUploadError, logMiddleware, ItemController.createItem);

/**
 * @swagger
 * /api/items/update/{id}:
 *   put:
 *     summary: Update an item's quantity
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: Item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemUpdateRequest'
 *     responses:
 *       200:
 *         description: Item updated successfully
 *       404:
 *         description: Item not found
 */
router.put('/update/:id', logMiddleware, ItemController.updateItemQuantity);

/**
 * @swagger
 * /api/items/sell/{id}:
 *   post:
 *     summary: Sell an item
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: Item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemSellRequest'
 *     responses:
 *       200:
 *         description: Item sold successfully
 *       404:
 *         description: Item not found
 */
router.post('/sell/:id', logMiddleware, ItemController.sellItem);

module.exports = router;

