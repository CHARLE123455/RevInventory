const express = require('express');
const LogController = require('../controllers/logController');
const {authenticateJWT} = require('../middleware/authMiddleware');
const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Log:
 *       type: object
 *       required:
 *         - action
 *         - details
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID
 *         action:
 *           type: string
 *           description: Type of action performed
 *         details:
 *           type: string
 *           description: Details of the action
 */

/**
 * @swagger
 * /api/logs/all:
 *   get:
 *     summary: Get all logs
 *     tags: [Logs]
 *     responses:
 *       200:
 *         description: List of all logs
 *       500:
 *         description: Server error
 */
router.get('/all', LogController.getAllLogs);

/**
 * @swagger
 * /api/logs/actions:
 *   get:
 *     summary: Get logs by action
 *     tags: [Logs]
 *     parameters:
 *       - in: query
 *         name: action
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of logs filtered by action
 *       500:
 *         description: Server error
 */
router.get('/actions/:action', LogController.getAllLogsByAction);

/**
 * @swagger
 * /api/logs/create:
 *   post:
 *     summary: Create a new log
 *     tags: [Logs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               action:
 *                 type: string
 *               details:
 *                 type: object
 *     responses:
 *       201:
 *         description: Log created successfully
 *       500:
 *         description: Server error
 */
router.post('/create', LogController.createLog);

module.exports = router;