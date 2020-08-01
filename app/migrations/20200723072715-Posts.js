"use strict";
var DataTypes = require("sequelize/lib/data-types");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("posts", {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
      },
      content: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
      },
      userName: {
        type: DataTypes.STRING(255),
        allowNull: true,
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
    queryInterface.dropTable("posts");
  },
};
