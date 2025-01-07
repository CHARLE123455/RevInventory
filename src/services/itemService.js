const Item = require('../models/Item');
const Log = require('../models/Log');


// Create Item Service
exports.createItem = async (data, imageUrl) => {

    const { name, price,quantity, category } = data;

    const item =  await Item.create({
        name, price, quantity, category, imageUrl
    });

    await Log.create({
        action: 'CREATE',
        details: {
            itemId:item.id, name,price,quantity
      }
    })

    return item;
};


//Update Item Quantity Service
exports.updateItemQuantity = async(id, quantity) => {
    const item = await Item.findByPk(id);
    if(!item) throw new Error ("Item not found");
    item.quantity = quantity;
    await Item.save();
    await Log.create({
        action: 'UPDATED',
        details: {
            itemId:id, quantity
        }
    });
    return item;
};

// Sell Item Service

exports.sellItem = async (id, quantitySold, buyer) => {
    const item = await Item.findByPk(id);
    if(!item) throw new Error("Item not found");
    if(item.quantity < quantitySold) throw new Error("Insufficient quantit,kindly restock!!!");
    item.quantity -= quantitySold;
    await item.save();
    await Log.create({
        action: 'SELL',
        details: {
            itemId:id, quantitySold, buyer, timestamp: new Date()
        }
    });
    return item;
}