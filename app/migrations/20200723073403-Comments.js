'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(
  'comments', {
  id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'id'
      }
    },
    postId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: {
          tableName: 'posts',
        },
        key: 'id'
      }
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
  queryInterface.dropTable('comments')
  }
};
