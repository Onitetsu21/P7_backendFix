module.exports = app => {
    const comments = require("../controllers/comment.controller.js");
    const auth = require("../middleware/auth");
    var router = require("express").Router();

    router.post("/", auth, comments.create);

    router.get("/:postId", auth, comments.findAll);

    router.get("/:id", auth, comments.findOne);

    router.put("/:id", auth, comments.update);

    router.delete("/:id", auth, comments.delete);

    app.use("/api/comments", auth, router);
}