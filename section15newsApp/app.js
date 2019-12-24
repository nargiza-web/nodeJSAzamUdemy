const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const pgp =require('pg-promise')()

const session = require('express-session')
const path = require('path')

const userRoutes = require('./routes/users')
const indexRoutes = require('./routes/index')
const PORT =3003
const CONNECTION_STRING = "postgress://localhost:5432/newsdb"

const VIEWS_PATH = path.join(__dirname, '/views')

// configuring your view engine
//app.engine('mustache', mustacheExpress())
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', './views')
app.set('view engine', 'mustache')
app.use('/css', express.static('css')) //localhost:3000/site.css

app.use(session({
  secret: 'lahadasah',
  resave: false,
  saveUnitialized: false
}))
app.use(bodyParser.urlencoded({extended: false}))

db = pgp(CONNECTION_STRING)

// setup routes
app.use('/users', userRoutes) 
app.use('/', indexRoutes)

app.listen(PORT, () => {
  console.log(`Server has started on ${PORT}`)
})