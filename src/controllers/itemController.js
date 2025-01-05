const ItemService = require('../services/itemService');

// create item controller
exports.createItem = async (req, res) => {
    try {
        let imageUrl;
        if(req.file && req.file.location) {
            imageUrl = req.file.location;
        }else {
            imageUrl = null;
        }
        const item = await ItemService.createItem(req.body, req.file.path);
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({message:'Error creating item: ' + error.message});
    }
};

// update item quantity controller

exports.updateItemQuantity = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity } = req.body;
        const item = await ItemService.updateItemQuantity(id, quantity);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({message:'Error updating item quantity: ' + error.message});
    }
};

// sell item controller
exports.sellItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantitySold, buyer } = req.body;
        const item = await ItemService.sellItem(id, quantitySold, buyer);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({message:'Error selling item: ' + error.message});
    }
};