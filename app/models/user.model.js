

module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define('role', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: Sequelize.STRING(255), allowNull: false},
  },
      {tableName: 'role', timestamps: false, underscored: true}
  ); 
  
  return Role;
  
} 





module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.BOOLEAN,
        default: false
      }
     
    });
    
    
    
    return User;
    
  };


  // User.belongsTo(Role);
  // sequelize.sync({logging: console.log});

  
