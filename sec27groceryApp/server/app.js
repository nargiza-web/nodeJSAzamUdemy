const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const ShoppingList = require('./models/shoppingList')
const PORT = 3000

app.use(bodyParser.json())

// connect to database
mongoose.connect("mongodb://localhost:27017/grocr", {useMewUrlParser: true}, (error) => {
  if(error) {
    console.log('Unable to connect to the database')
  } else {
    console.log('Connected to the database!')
  }
})

app.post('/api/shopping-lists', async (req, res) => {
  
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
  console.log("Server is running...")
})