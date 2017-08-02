
let db = require("../models");
let _ = require("lodash");
let middleware = require("../middleware")(db);
let routes = require("express").Router();


let PostController = require("../controllers/PostController");
let UserController = require("../controllers/UserController");

// Post Routes
routes.get('/post', PostController.GetAllPost);
routes.get("/post/:id", PostController.GetPostById);
routes.put("/post", middleware.requireAuthentication, PostController.CreatePost);
routes.post("/post/:id", middleware.requireAuthentication, PostController.UpdatePostById);
routes.delete("/post/:id", middleware.requireAuthentication, PostController.DeletePostById);

// User Routes
routes.get("/users", UserController.GetUsers);
routes.get("/users/:id", UserController.GetUserById);
routes.post("/users", UserController.CreateUser);
routes.post("/users/login", UserController.Login);

module.exports = routes;