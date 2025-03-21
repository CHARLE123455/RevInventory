const ItemService = require('../services/itemService');

// create item controller
exports.createItem = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: 'Image is required for creating an item'
            });
        }
        
        const imageUrl = req.file.path;
        
        const item = await ItemService.createItem(req.body, imageUrl);
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({
            message: 'Error creating item: ' + error.message,
        
        });
    }
};
// get all items controller
exports.getAllItems = async (req, res) => {
    try{
        const items = await ItemService.getAllItems();
    return res.status(200).json({
        items,
        message: "Success"
    })
    }catch(error){
        return res.status(500).json({
            message: 'Error fetching items: ' + error.message,
        })
    }
}
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