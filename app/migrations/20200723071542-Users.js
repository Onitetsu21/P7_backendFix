'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(
  'users',
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isAuth: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 0
    },
    admin: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 0
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }).done(done);
},

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users')
  }
};
