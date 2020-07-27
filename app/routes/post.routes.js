module.exports = (app) => {
  const posts = require("../controllers/post.controller.js");
  const auth = require("../middleware/auth");
  var router = require("express").Router();

  router.post("/", auth, posts.create);

  router.get("/", auth, posts.findAll);

  router.get("/:id", auth, posts.findOne);

  router.put("/:id", auth, posts.update);

  router.delete("/:id", auth, posts.delete);

  app.use("/api/posts", router);
};
