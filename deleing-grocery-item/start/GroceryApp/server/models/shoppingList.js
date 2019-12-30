const mongoose = require('mongoose')
const GroceryItem = require('./groceryItem')

const shoppingListSchema = mongoose.Schema({
  name: String,
  address: String,
  groceryItems: [GroceryItem.schema]
})

const ShoppingList = mongoose.model('ShoppingList',shoppingListSchema)

module.exports = ShoppingList
