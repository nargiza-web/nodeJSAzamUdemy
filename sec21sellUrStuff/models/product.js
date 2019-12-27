'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    imageURL: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    models.Product.hasMany(models.Comment, {as: 'comments', foreignKey: 'productId'})
  };
  return Product;
};