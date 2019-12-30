
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const ShoppingList = require('./models/shoppingList')
const GroceryItem = require('./models/groceryItem')

const PORT = 3000

app.use(cors())
app.use(bodyParser.json())

// connect to database
mongoose.connect('mongodb://localhost:27017/grocr',{useNewUrlParser: true},(error) => {
  if(error) {
    console.log('Unable to connect to the database!')
  } else {
    console.log('Connected to the database!')
  }
})

app.post('/api/grocery-items',async (req,res) => {

  const name = req.body.name
  const price = req.body.price
  const quantity = req.body.quantity
  const shoppingListId = req.body.shoppingListId

  const groceryItem = new GroceryItem({
    name: name,
    price: price,
    quantity: quantity
  })

  const shoppingList = await ShoppingList.findById(shoppingListId)
  shoppingList.groceryItems.push(groceryItem)
  const savedShoppingList = await shoppingList.save()

  if(savedShoppingList) {
    res.json(savedShoppingList)
  } else {
    res.status(500).json({message: 'Unable to save grocery item'})
  }

})

app.get('/api/shopping-lists',async (req,res) => {

  let shoppingLists = await ShoppingList.find({})
  res.json(shoppingLists)

})

app.get('/api/shopping-lists/:shoppingListId', async (req,res) => {

  const shoppingListId = req.params.shoppingListId
  const shoppingList = await ShoppingList.findOne({_id: shoppingListId})
  return res.json(shoppingList)

})

app.post('/api/shopping-lists',async (req,res) => {

  const name = req.body.name
  const address = req.body.address

  let shoppingList = new ShoppingList({
    name: name,
    address: address
  })

  let savedShoppingList = await shoppingList.save()

  if(savedShoppingList) {
    res.json(savedShoppingList)
  } else {
    res.status(500).json({message: 'Unable to save a shopping list!'})
  }

})


app.listen(PORT, () => {
  console.log('Server is running..')
})
