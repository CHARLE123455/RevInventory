const Item = require("../models/Item");

exports.createItem = async (data, imageUrl) => {
  try {
    const { name, price, quantity, categoryId } = data;

    // Create item with imageUrl
    const item = await Item.create({
      name,
      price,
      quantity,
      categoryId,
      imageUrl: imageUrl || null,
    });
    return item;
  } catch (error) {
    throw new Error(`Failed to create item: ${error.message}`);
  }
};
// get all items
exports.getAllItems = async () => {
  try{
    const allItems = await Item.findAll();
    return allItems;

  }catch{
    throw new Error('Unable to retrieve all items');
  }
}
exports.updateItemQuantity = async (id, quantity) => {
  try {
    const item = await Item.findByPk(id);
    if (!item) throw new Error("Item not found");

    item.quantity = quantity;
    await item.save();
    return item;
  } catch (errors) {
    throw new Error(`Failed to update item quantity: ${errors.message}`);
  }
};


exports.sellItem = async (id, quantitySold) => {
  const item = await Item.findByPk(id);
  if (!item) throw new Error("Item not found");
  if (item.quantity < quantitySold)
    throw new Error("Insufficient quantity, kindly restock!");

  item.quantity -= quantitySold;
  await item.save();
  return item;
};
