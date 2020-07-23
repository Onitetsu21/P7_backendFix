'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Users', [{
        name: "alix1",
        email: 'alix1@gmail.com',
        password: "Alix1@gmail",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: async (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Users', null, {});
  }
};
