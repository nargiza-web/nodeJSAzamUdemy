const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const path = require('path')
const userRoutes = require('./routes/users')
const session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

const VIEWS_PATH = path.join(__dirname, '/views')
app.use(bodyParser.urlencoded({extended: false}))
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))

function authenticate(req, res, next){
  if(req.session){
    if(req.session.name){
      next()
    } else {
      res.redirect('/users/add-user')
    }
  } else {
    res.redirect('/users/add-user')
  }
}

app.use('/users',authenticate, userRoutes)
app.use('/css', express.static("css"))
//app.use(express.static("css"))
// app.engine('mustache', mustacheExpress())

//app.set('views', './views')

app.set('views', VIEWS_PATH)

app.set('view engine', 'mustache')


app.listen(3000, () => {
  console.log("Server is running....")
})