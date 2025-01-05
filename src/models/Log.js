const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Log = db.define('Log', {
    action: {
        type: DataTypes.STRING, allowNull: false,
    },
    details: {
        type: DataTypes.STRING, allowNull: false,
    },
});


module.exports = Log;