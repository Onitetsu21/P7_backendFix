const db = require("../models");
const Post = db.post;
const Op = db.Sequelize.Op;
const {QueryTypes} = require("Sequelize")
const seq = db.sequelize;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    
    const post = {
      content: req.body.content,
      userId: req.body.userId,
      userName: req.body.userName
      
    };
    // console.log('post ====>', post)
  
    // Save post in the database
    Post.create(post)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the post."
        });
      });
  };

  // Post.query("SELECT content, users.name FROM posts INNER JOIN users ON users.id = posts.userId", {type: Op.SELECT})


exports.findAll = (req, res) => {
// const content = req.query.content;
// var condition = content ? { content: { [Op.like]: `%${content}%` } } : null;
seq.query(`
SELECT posts.id, users.name AS userName, posts.content, DATE_FORMAT(posts.createdAt, \"%d-%m-%Y à %H:%i\") 
AS createdAt 
FROM posts 
INNER JOIN users ON users.id = posts.userId 
ORDER BY posts.createdAt ASC `, { type: seq.QueryTypes.SELECT}) 
    .then(data => {
      console.log(data)
      
    res.send(data);
    
    })
    .catch(err => {
    res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving posts."
    });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Post.findByPk(id)
    .then(data => {

      res.send(data);
      // console.log("data ====>", data.userId)
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Post with id=" + id
      });
    });
};



exports.update = (req, res) => {
const id = req.params.id;

Post.update(req.body, {
    where: { id: id }
})
    .then(num => {
    if (num == 1) {
        res.send({
        message: "Post was updated successfully."
        });
    } else {
        res.send({
        message: `Cannot update Post with id=${id}. Maybe Post was not found or req.body is empty!`
        });
    }
    })
    .catch(err => {
    res.status(500).send({
        message: "Error updating Post with id=" + id
    });
    });
};


exports.delete = (req, res) => {
const id = req.params.id;

Post.destroy({
    where: { id: id }
})
    .then(num => {
    if (num == 1) {
        res.send({
        message: "Post was deleted successfully!"
        });
    } else {
        res.send({
        message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
        });
    }
    })
    .catch(err => {
    res.status(500).send({
        message: "Could not delete Post with id=" + id
    });
    });
};


exports.deleteAll = (req, res) => {
Post.destroy({
    where: {},
    truncate: false
})
    .then(nums => {
    res.send({ message: `${nums} Posts were deleted successfully!` });
    })
    .catch(err => {
    res.status(500).send({
        message:
        err.message || "Some error occurred while removing all posts."
    });
    });
};

