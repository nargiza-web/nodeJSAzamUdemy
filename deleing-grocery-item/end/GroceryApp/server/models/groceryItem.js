
const mongoose = require('mongoose')

const groceryItemSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number
})

const GroceryItem = mongoose.model('GroceryItem',groceryItemSchema)

module.exports = GroceryItem
