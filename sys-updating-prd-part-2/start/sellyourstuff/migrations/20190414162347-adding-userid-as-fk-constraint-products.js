'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.addConstraint(
        'Products',
        ['userId'],{
          type: 'FOREIGN KEY',
          references: {
            name: 'userid-fk-in-products',
            table: 'Users',
            field: 'id'
          }
        }
      )

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeConstraint(
      'Products',
      'userid-fk-in-products'
    )
  }
};
