const Category = require('../models/Category');

// Create a new Category

exports.createCategory = async (name) => {
    const category = await Category.create({name});
    return category;
};

// Get all Categories
exports.getAllCategories = async () => {
    const allCategories = await Category.findAll();
    return allCategories;
};

