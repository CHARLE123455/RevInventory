const Log = require('../models/Log');

// get all logs controller
exports.getAllLogs = async (req, res) => {
    try {
        const logs = await Log.findAll();
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({message:'Error getting logs: ' + error.message});
    }
};