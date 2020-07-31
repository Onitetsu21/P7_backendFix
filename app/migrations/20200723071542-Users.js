"use strict";
var DataTypes = require("sequelize/lib/data-types");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("users", {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      admin: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: 0,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("users");
  },
};
