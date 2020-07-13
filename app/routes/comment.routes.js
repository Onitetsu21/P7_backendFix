module.exports = app => {
    const comments = require("../controllers/comment.controller.js");

    var router = require("express").Router();

    router.post("/", comments.create);

    router.get("/:postId", comments.findAll);

    router.get("/:id", comments.findOne);

    router.put("/:id", comments.update);

    router.delete("/:id", comments.delete);

    app.use("/api/comments", router);
}