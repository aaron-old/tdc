let db = require("../models");
let _ = require("lodash");
let authMiddleware = require("../auth/AuthMiddleware")(db);
let routes = require("express").Router();
let passport = require('passport');

let PostController = require("../controllers/PostController");
let UserController = require("../controllers/UserController");
let AuthenticationController = require('../controllers/AuthenticationController');
let RoleController = require('../controllers/RoleController');

// Post Routes
routes.get('/post', PostController.GetAllPost);
routes.get("/post/:id", PostController.GetPostById);
routes.put("/post", authMiddleware.requireUserAuthentication, PostController.CreatePost);
routes.post("/post/:id", authMiddleware.requireUserAuthentication, PostController.UpdatePostById);
routes.delete("/post/:id", authMiddleware.requireUserAuthentication, PostController.DeletePostById);

// User Routes
routes.get("/users", authMiddleware.requireAdminAuthentication, UserController.GetUsers);
routes.get("/users/roles", authMiddleware.requireAdminAuthentication, UserController.GetUsersWithRoles);
routes.get("/users/:id", authMiddleware.requireAdminAuthentication, UserController.GetUserById);
routes.post("/users", authMiddleware.requireAdminAuthentication, UserController.CreateUser);
routes.delete("/users/:id", authMiddleware.requireAdminAuthentication, UserController.DeleteUserById);

// Role Routes
routes.get("/role/user/:id", RoleController.GetUserRoles);
routes.put("/role",  authMiddleware.requireAdminAuthentication, RoleController.AddUserRole);


// Authentication Routes
routes.post("/auth/login", AuthenticationController.Login);
routes.post("/auth/logout", AuthenticationController.Logout);


module.exports = routes;