const { DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.define('User',
    {
        name: {
            type: DataTypes.STRING, allowNull: false,
        },
        email: {
            type: DataTypes.STRING, allowNull: false, unique: true, validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,13}/,
            },
    },
        role: {
            type: DataTypes.ENUM('admin', 'buyer') , allowNull: false, defaultValue: 'buyer',
        },
    });

module.exports = User;