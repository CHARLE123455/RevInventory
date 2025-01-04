const { DataType} = require('sequelize');
const db = require('../config/database');

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
    category_id: {
        type: DataType.INTEGER, allowNull: false,
    },
    imageUrl: {
        type: DataType.STRING, allowNull: false,
    },

});


module.exports = Item;