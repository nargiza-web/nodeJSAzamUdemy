const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: String,
  isbn: String,
  author: String
})

const Book = mongoose.model('Book', bookSchema) // books

module.exports = Book