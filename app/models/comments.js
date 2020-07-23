/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comments', {
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
  }, {
    sequelize,
    tableName: 'comments'
  });
};
