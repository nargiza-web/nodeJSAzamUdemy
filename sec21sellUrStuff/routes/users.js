const express = require('express')
const router = express.Router()
const formidable = require('formidable')
const uuidv1 = require('uuid/v1')
const models = require('../models')

let uniqueFilename = ''

router.get('/add-product', async (req, res) => {
  res.render('users/add-product')
})

router.post('/update-product', async (req, res) => {
  
  const productId = req.body.productId
  const title = req.body.title
  const description = req.body.description
  const price = parseFloat(req.body.price)
  
  const result = await models.Product.update({
    title: title,
    description: description,
    price: price,
    imageURL: uniqueFilename
  },{
    where: {
      id: productId
    }
  })
  
  res.redirect('/users/products')
  
})

router.post('/upload/edit/:productId', (req, res) => {
  
  uploadFile(req, async (photoURL) => {
    
    let productId = parseInt(req.params.productId)
    let product = await models.Product.findByPk(productId)
    
    let response = product.dataValues
    response.imageURL = photoURL
    
    res.render("users/edit", response)
    
  })
  
})

// when edit button is clicked
router.get('/products/:productId', async (req, res) => {
  
  let productId = req.params.productId
  let product = await models.Product.findByPk(productId)
  res.render('users/edit', product.dataValues)
  
})

router.post('/delete-product', async (req, res) => {
  
  let productId = parseInt(req.body.productId)
  
  let result = await models.Product.destroy({
    where: {
      id: productId
    }
  })
  
  res.redirect('/users/products')
  
})

router.get('/products', async (req, res) => {
  
  let products = await models.Product.findAll({
    where: {
      userId: req.session.user.userId
    }
  })
  
  res.render('users/products', {products: products})
  
})

router.post('/add-product',async (req, res) => {
  
  let title = req.body.title
  let description = req.body.description
  let price = parseFloat(req.body.price)
  let userId = req.session.user.userId
  
  let product = models.Product.build({
    title: title,
    description: description,
    price: price,
    userId: userId,
    imageURL: uniqueFilename
  })
  
  let persistedProduct = await product.save()
  if(persistedProduct != null) {
    res.redirect('/users/products')
  } else {
    res.render('users/add-product', {message: 'Unable to add product'})
  }
  
})

function uploadFile(req, callback){
  
  new formidable.IncomingForm().parse(req)
  .on('fileBegin',(name, file) => {
    
    uniqueFilename = `${uuidv1()}.${file.name.split('.').pop()}`
    file.name = uniqueFilename
    file.path = __basedir + '/uploads/' + file.name 
  })
  .on('file', (name, file) => {
    callback(file.name)
  })  
}

router.post('/upload', (req, res) => {
  
  uploadFile(req, (photoURL) => {
    photoURL = `/uploads/${photoURL}`
    res.render('users/add-product', {imageURL: photoURL, className: 'product-preview-image' })
  })
  
})

module.exports = router