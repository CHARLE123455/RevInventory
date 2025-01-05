const Log = require('../models/Log');

// Create Log Service
exports.createLog = async (action, details) => {
    const log = await Log.create({action, details});
    return log;
};

// Get all Logs by action
exports.getAllLogsByAction = async (action) => {
    const logsByAction = await Log.findAll({where: {action}});
    return logsByAction;
};