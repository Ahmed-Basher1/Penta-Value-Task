'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'ahmed',
      picture: 'default.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'basher',
      picture: 'default.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  // down: async (queryInterface, Sequelize) => {
  //   return queryInterface.bulkDelete('Users', null, {});
  // }
};
