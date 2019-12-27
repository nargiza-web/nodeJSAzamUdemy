'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    imageURL: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};