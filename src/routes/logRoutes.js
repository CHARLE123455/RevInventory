const express = require('express');
const LogController = require('../controllers/logController');
const { getLogsByAction } = require('../middleware/logMiddleware');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     LogFilterRequest:
 *       type: object
 *       required:
 *         - action
 *       properties:
 *         action:
 *           type: string
 *           description: The action type to filter logs by
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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Log ID
 *                   action:
 *                     type: string
 *                     description: Type of action performed
 *                   details:
 *                     type: string
 *                     description: Details of the action
 *       500:
 *         description: Server error
 */
router.get('/all', LogController.getAllLogs);

/**
 * @swagger
 * /api/logs/actions:
 *   get:
 *     summary: Get logs filtered by action
 *     tags: [Logs]
 *     parameters:
 *       - in: query
 *         name: action
 *         required: true
 *         schema:
 *           type: string
 *           description: The action type to filter logs
 *     responses:
 *       200:
 *         description: Logs filtered by action
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Log ID
 *                   action:
 *                     type: string
 *                     description: Type of action performed
 *                   details:
 *                     type: string
 *                     description: Details of the action
 *       500:
 *         description: Server error
 */
router.get('/actions', getLogsByAction, (req, res) => {
  res.status(200).json(res.locals.logs);
});

module.exports = router;
