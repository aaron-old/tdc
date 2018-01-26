let router = require("express").Router();
let setupPostRoutes = require("./postRoutes");
let setupUserRoutes = require("./userRoutes");
const BASE_API_URL = "/api" ;

module.exports = (app) => {
  setupPostRoutes(router);
  setupUserRoutes(router);
  //setupRoleRoutes(router);
  //setupAuthenticationRoutes(router);
  //setupRegistrationRoutes(router);
  app.use(BASE_API_URL, router);
};