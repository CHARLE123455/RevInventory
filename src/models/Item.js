const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Category = require('./Category');

const Item = db.define('Item', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,  // 
        defaultValue: null 
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Category,
            key: 'id'
        }
    }
});

Item.belongsTo(Category, {
    foreignKey: 'categoryId',
    as: 'category',
});

module.exports = Item;