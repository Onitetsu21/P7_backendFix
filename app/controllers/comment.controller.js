const db = require("../models");
const Comment = db.comment;
const Op = db.Sequelize.Op;
const {QueryTypes} = require("Sequelize")
const seq = db.sequelize;

exports.create = (req, res) => {
  console.log("fct create atteinte")
    // Validate request
    if (!req.body.content) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a comment
    const comment = {
      content: req.body.content,
      userId: req.body.userId,
      userName: req.body.userName,
      postId: req.body.postId
    };
  
    // Save comment in the database
    Comment.create(comment)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the comment."
        });
      });
  };


  exports.findAll = (req, res) => {
    const content = req.params.postId;
    
    console.log("content =====>", content)
    // var condition = content ? { content: { [Op.like]: `%${content}%` } } : null;
    seq.query(`
    SELECT  comments.id, posts.id AS postId, comments.userName, comments.content, DATE_FORMAT(comments.createdAt, \"%d-%m-%Y à %H:%i"\) 
    AS createdAt 
    FROM comments 
    INNER JOIN posts ON posts.id = comments.postId
    WHERE comments.postId = ? 
    
    ORDER BY comments.createdAt DESC`, { type: seq.QueryTypes.SELECT, replacements: [content]}) 
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

// exports.findOne = (req, res) => {
//   const postId = req.params.id;
//   console.log("findone ===>")
//   seq.query(`
//   SELECT posts.userName, comments.content, DATE_FORMAT(posts.createdAt, \"%d-%m-%Y à %H:%i\") AS createdAt 
//   FROM comments 
//   INNER JOIN posts ON posts.id = comments.postId 
//   WHERE comments.postId  = ?`, { type: seq.QueryTypes.SELECT, replacements: [postId] }) 
//       .then(data => {
//         const response = data
//         console.log("response ====>", response)
//       })
//       .catch(e => {
//         res.status(500).send({message: "Error retrieving Post with id=" + id});
//         console.log(e)
//       }) 
// };

exports.update = (req, res) => {
const id = req.params.id;

Comment.update(req.body, {
    where: { id: id }
})
    .then(num => {
    if (num == 1) {
        res.send({
        message: "Comment was updated successfully."
        });
    } else {
        res.send({
        message: `Cannot update Comment with id=${id}. Maybe Comment was not found or req.body is empty!`
        });
    }
    })
    .catch(err => {
    res.status(500).send({
        message: "Error updating Comment with id=" + id
    });
    });
};


exports.delete = (req, res) => {
const id = req.params.id;

Comment.destroy({
    where: { id: id }
})
    .then(num => {
    if (num == 1) {
        res.send({
        message: "Comment was deleted successfully!"
        });
    } else {
        res.send({
        message: `Cannot delete Comment with id=${id}. Maybe Comment was not found!`
        });
    }
    })
    .catch(err => {
    res.status(500).send({
        message: "Could not delete Comment with id=" + id
    });
    });
};


exports.deleteAll = (req, res) => {
Comment.destroy({
    where: {},
    truncate: false
})
    .then(nums => {
    res.send({ message: `${nums} Comments were deleted successfully!` });
    })
    .catch(err => {
    res.status(500).send({
        message:
        err.message || "Some error occurred while removing all comments."
    });
    });
};

