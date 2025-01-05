const LogService = require('../services/logService');

// get all logs controller
exports.getAllLogs = async (req, res) => {
    try {
        const logs = await LogService.getAllLogs();
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({message:'Error getting logs: ' + error.message});
    }
};

// get all logs by action controller
exports.getAllLogsByAction = async (req, res) => {
    try {
        const { action } = req.params;
        const logs = await LogService.getAllLogsByAction(action);
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({message:'Error getting logs by action: ' + error.message});
    }
};