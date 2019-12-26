const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const path = require('path')
const bodyParser = require('body-parser')
const models = require('./models')
const bcrypt = require('bcrypt')
const session = require('express-session')
const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/users')
const PORT = 3000;
const VIEWS_PATH = path.join(__dirname, '/views')

global.__basedir = __dirname

app.use(session({
  secret: 'somesecret',
  resave: true,
  saveUnintialized: false
}))

// static folder
app.use('/uploads', express.static('uploads'))

app.use(bodyParser.urlencoded({extended:false}))

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')
app.use('/', indexRoutes)
app.use('/users', userRoutes)

app.listen(PORT, ()=> console.log('Server is running....'))
