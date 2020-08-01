/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "posts",
    {
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
      comments: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: {
            tableName: "comments",
          },
          key: "id",
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "posts",
    }
  );
};
