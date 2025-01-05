const CategoryService = require('../services/categoryService');

// create category controller

exports.createCategory = async (req, res) => {
    try {
        const category = await CategoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({message:'Error creating category: ' + error.message});
    }
};

// get all categories controller
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await CategoryService.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({message:'Error getting categories: ' + error.message});
    }
}