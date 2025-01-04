const { DataType } = require('sequelize');
const db = require('../config/database');

const Category = db.define('Category',
    {
        name: {
            type: DataType.STRING, allowNull: false,
        },
        description: {
            type: DataType.STRING, allowNull: false,
        },
    });


    module.exports = Category;
