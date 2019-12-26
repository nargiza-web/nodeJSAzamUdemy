const models = require('./models')


// CREATING AND SAVING DATA
/* 
 let dish = models.Dish.build({
   name: 'Spring Rolls',
   description: "Delicious egg spring rolls",
   price: 3.75
 })

 dish.save().then((persistedDish) => {
   console.log(persistedDish)
 })
*/

// READING DATA
/*
models.Dish.findByPk(3)
.then((dish) => console.log (dish))
*/
/*
models.Dish.findAll()
.then((dishes) => console.log(dishes))
*/
/*
models.Dish.findAll({
  where: {
    name: 'Spring Rolls'
  }
}).then((dishes) => console.log(dishes))
*/
/*
models.Dish.findOne({
  where: {
    name: 'Spring Rolls'
  }
}).then(dish => console.log(dish))
*/

// UPDATING DATA
/*
models.Dish.update({
  name: 'Carrot Cake',
  price: 8.0
}, {
  where: {
    id: 2
  }
}).then((updatedDish) => console.log(updatedDish))
*/

models.Dish.destroy({
  where: {
    id: 3
  }
}).then(result => console.log(result))