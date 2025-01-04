const { DataType } = require('sequelize');
const db = require('../config/database');

const Log = db.define('Log', {
    action: {
        type: DataType.STRING, allowNull: false,
    },
    details: {
        type: DataType.STRING, allowNull: false,
    },
});


module.exports = Log;