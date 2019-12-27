'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addConstraint(
      'Comments',
      ['productId'],{
        type: 'FOREIGN KEY',
        references: {
          name: 'postid-fk-in-comments',
          table: 'Products',
          field: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.removeConstraint(
      'Comments',
      'postid-fk-in-comments'
    )
  }
};
