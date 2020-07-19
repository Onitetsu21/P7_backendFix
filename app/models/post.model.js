module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
      content: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      userName:{
        type: Sequelize.STRING
      },
      likes: {
        type: Sequelize.INTEGER,
      },
      comments: {
        type: Sequelize.STRING
      },
    });
  
    return Post;
  };