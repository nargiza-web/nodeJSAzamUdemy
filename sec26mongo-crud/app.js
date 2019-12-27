const mongoose = require('mongoose')
const Book = require('./models/book')

mongoose.set('useFindAndModify', false)

mongoose.connect('mongodb://localhost:27017/hello-mongo', {useNewUrlParser: true}, (error) => {
  if(error){
    console.log("Unable to connect to the database")
  } else {
    console.log("Connected to the database")
  }
})

// DELETE
Book.findOneAndDelete({_id: '5e063bd9574f638b3c29025b'},(error, result) => {
  console.log(result)
})

// UPDATE
/*
const updatedDoc = {
  title: 'Node 101',
  author: 'Alex Lowe'
}
Book.findOneAndUpdate({_id: '5e063bd9574f638b3c29025b'}, updatedDoc, (error, result) => {
  console.log(result)
})
*/

// READ
/*
Book.findOne({title: 'Introduction to NodeJS'}, (error, book) => {
  console.log(book)
})
*/
/*
Book.findOne({_id: '5e063bd9574f638b3c29025b'},(error, book) => {
  console.log(book)
})
*?
/*
Book.findById('5e063bd9574f638b3c29025b', (error, book) => {
  console.log(book)
})
*/
/*
Book.find({}, (error, books) => {
  console.log(books)
})
*/

// CREATE 
/*
const book = new Book({
  title: 'Introduction to Express',
  isbn: 'rftg3367',
  author: 'mary doe'
})

book.save((error, newBook) => {
  if(error) {
    console.log(error)
  } else {
    console.log(newBook)
  }
})
*/
