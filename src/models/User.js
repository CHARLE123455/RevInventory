const { DataType } = require('sequelize');
const db = require('../config/database');

const User = db.define('User',
    {
        name: {
            type: DataType.STRING, allowNull: false,
        },
        email: {
            type: DataType.STRING, allowNull: false, unique: true, validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataType.STRING, allowNull: false, validate: {
                is : "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,13}",
        }
    },
        role: {
            type: DataType.ENUM('admin', 'buyer') , allowNull: false,
        },
    });

module.exports = User;