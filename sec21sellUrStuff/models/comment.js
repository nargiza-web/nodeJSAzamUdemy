'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    models.Comment.belongsTo(models.Product, {as: 'product', foreignKey: 'productId'})
  };
  return Comment;
};