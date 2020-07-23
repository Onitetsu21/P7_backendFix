'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Users', [{
        name: "admin",
        email: 'admin@admin.com',
        password: "admin",
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: async (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Users', null, {});
  }
};