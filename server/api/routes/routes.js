let routes = require("express").Router();

let PostController = require("./controllers/postController");

module.exports = (app) => {

  app.use("/api", routes);

  routes.get("/post", PostController.getAllPosts);
  routes.post("/post", (req, res) => {
    res.status(201).send();
  })
};