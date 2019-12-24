const express = require('express')
const app = express()
const PORT = 3000
const session = require('express-session')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

/*
app.use(log)
function log(req, res, next){
  console.log("[Logged]")
  console.log("[Logging Code 1]")
  console.log("[Logging Code 2]")
  console.log("[Logging Code 3]")
  //if you don't put this next() the spinner will go forever!
  next()
}
*/

app.get('/',  (req, res) => {
  
  res.send("ROOT")
})

app.get('/login', (req, res) => {
  
  res.send("LOGIN")
})

app.listen(PORT, () => {
  console.log("Server is running...")
})