const express = require('express')
const router = express.Router()

// localhost:3000/users
router.get('/',(req,res) => {

  let user = {
            name: "John Doe",
            address: {
              street: "789 Street",
              city: "Houston",
              state: "TX"
            }

          }

  res.render('index',user)
})

router.get('/add-user',(req,res) => {
  res.render('add-user')
})


router.post('/add-user',(req,res) => {

  let name = req.body.name
  let age = req.body.age

  console.log(name)
  console.log(age)

  res.status(200).send()
})


router.get('/users',(req,res) => {

  let users =
      [
        {name: "John Doe", age: 34},
        {name: "Mary Doe", age: 32},
        {name: "Alex Lowe",age: 27}
      ]

    users = []
    res.render('users',{users: users})

})

module.exports = router
