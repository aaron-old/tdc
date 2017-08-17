let userRepositories = require("../repositories/UserRepository");
let isDevOrTest = require("../helpers").isDevOrTest;
let _ = require("lodash");

/**
 *
 * @param req
 * @param res
 * @constructor
 */
exports.GetUsers = (req, res) => {

  userRepositories.getUsers().then((users) => res.status(200).json(users), (e) => {
    if (isDevOrTest()) {
      res.status(400).send(e);
    }
    res.status(400).send();
  });
};

exports.GetUsersWithRoles = (req, res) => {

  userRepositories.getUsersWithRoles().then((users) => res.status(200).json(users), (e) => {
    if(isDevOrTest()) {
      res.status(400).send(e);
    }
    res.status(400).send();
  });
};

/**
 *
 * @param req
 * @param res
 * @constructor
 */
exports.GetUserById = (req, res) => {

  let id = req.params.id;
  if (id) {
    userRepositories.getUserById(id).then((user) => res.status(200).json(user), (e) => {
      if (isDevOrTest()) {
        res.status(400).send(e);
      }
      res.status(400).send();
    });
  }
};

/**
 *
 * @param req
 * @param res
 * @constructor
 */
exports.CreateUser = (req, res) => {
  let user = req.body;
  if (user) {
    userRepositories.createUser(user).then((user) => res.status(201).json(user), (e) => {
      if (isDevOrTest()) {
        res.status(400).send(e);
      }
      res.status(400).send();
    });
  }
};

exports.DeleteUserById = (req, res) => {
  let id = req.params.id;
  if(id) {
    userRepositories.deleteUserById(id).then(() => res.status(204).send(), (e) => {
      if(isDevOrTest()) {
        res.status(400).send(e);
      }
      res.status(400).send();
    })
  }
};
