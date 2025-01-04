const { DataType} = require('sequelize');
const db = require('../config/database');
const Category = require('./Category');

const Item = db.define('Item', {
    name: {
        type: DataType.STRING,allowNull: false,
    },
    price: {
        type: DataType.FLOAT,allowNull: false,
    },
    quantity: {
        type: DataType.INTEGER,allowNull: false,
    },
    imageUrl: {
        type: DataType.STRING, allowNull: false,
    },

});

Item.belongsTo(Category, {
    foreignKey: 'categoryId',
    as: 'category',

});


module.exports = Item;