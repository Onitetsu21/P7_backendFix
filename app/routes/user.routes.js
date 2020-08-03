module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();

    router.post("/", users.create);

    router.get("/", users.findAll);

    router.get("/:email", users.findOne);

    router.put("/:id", users.update);

    router.delete("/:id", users.delete);

    router.post("/login", users.login);
    
    router.post("/confirmpass", users.confirmPassword);

    app.use("/api/users", router);
}