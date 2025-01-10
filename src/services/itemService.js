const Item = require('../models/Item');
const Log = require('../models/Log');

exports.createItem = async (data, imageUrl) => {
    try {
        const { name, price, quantity, categoryId } = data;

        // Create item with imageUrl
        const item = await Item.create({
            name,
            price,
            quantity,
            categoryId,
            imageUrl: imageUrl || null
        });
        return item;
    } catch (error) {
        throw new Error(`Failed to create item: ${error.message}`);
    }
};

exports.updateItemQuantity = async (id, quantity) => {
    const item = await Item.findByPk(id);
    if (!item) throw new Error("Item not found");
    
    item.quantity = quantity;
    await item.save();  
    return item;
};

exports.sellItem = async (id, quantitySold, buyer) => {
    const item = await Item.findByPk(id);
    if (!item) throw new Error("Item not found");
    if (item.quantity < quantitySold) throw new Error("Insufficient quantity, kindly restock!");
    
    item.quantity -= quantitySold;
    await item.save();
    return item;
};