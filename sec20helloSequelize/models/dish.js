'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dish = sequelize.define('Dish', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
  Dish.associate = function(models) {
    // associations can be defined here
  };
  return Dish;
};