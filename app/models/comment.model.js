module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
      content: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      postId: {
        type: Sequelize.INTEGER
      }
      
    //   adminmode: {
    //       type: Sequelize.BOOLEAN,
    //       defaultValue: true
    //   }
    });
  
    return Comment;
  };