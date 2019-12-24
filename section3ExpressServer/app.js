const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// setting up body parser
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello Express!")
})

app.get('/movies', (req, res) => {
  res.send("Movies")
})

app.post('/movies', (req, res) => {
  let title = req.body.title
  let year = req.body.year
  let revenue = req.body.revenue
  console.log(title, year)
  console.log(revenue)
  res.send("OK")
})





/*
app.get('/movies', (req, res) => {
  
  let movies = [
    { title: "Lord of the Rings", year: 2014},
    {title: "Spiderman", year: 2018},
    {title: "Black Sheet", year: 1992}
  ]
  let movie = { title: "Lord of the Rings", year: 2014}
  console.log(req.query.sort)
  console.log(req.query.page)
  //res.send("[Movies]")
  res.json(movies)
})
app.get('/movies/:genre/year/:year', (req, res) => {
  console.log(req.params.genre)
  console.log(req.params.year)
    res.send("Movies Route")
})

app.get('/hello', function(req, res){
  res.send("Hello World!")
})

app.get('/movies/comedy', (req, res) => {
  res.send("Comedy Movies")
})
*/
/*
app.get('/movies/year', (req, res) => {
  res.send("Movies/Year")
})
*/
app.listen(3000, function() {
  console.log("Server is running on PORT 3000")
})