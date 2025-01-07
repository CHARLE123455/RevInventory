const Category = require('../models/Category');

// Create a new Category

exports.createCategory = async (categoryData) => {
    // Extract name from the category data object
    const { name } = categoryData;
    
    if (!name || typeof name !== 'string') {
        throw new Error('Category name must be a valid string');
    }
    
    const category = await Category.create({ name });
    return category;
};

exports.getAllCategories = async () => {
    const allCategories = await Category.findAll();
    return allCategories;
};

