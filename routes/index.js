
let db = require("../models");
let _ = require("lodash");
let middleware = require("../middleware")(db);
let routes = require("express").Router();


let PostController = require("../controllers/PostController");
let UserController = require("../controllers/UserController");

routes.get('/post', PostController.GetAllPost);
routes.get("/post/slug", PostController.GetPostBySlug);
routes.get("/post/:id", PostController.GetPostById);
routes.post("/post", PostController.CreatePost);
routes.put("/post/:id", PostController.UpdatePostById);
routes.delete("/post/:id", PostController.DeletePostById);


// TODO: make a route that needs to be authenticated by the application... so a person cannot call this from the outside.

routes.get("/users", UserController.GetUsers);
routes.get("/users/:id", UserController.GetUserById);
routes.post("/users", UserController.CreateUser);
routes.post("/users/login", UserController.Login);

module.exports = routes;
