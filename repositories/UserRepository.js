'use strict';

let db = require("../models");
let token = require("../auth/Jwt");
let repo = {};

const cleanUserAttr = [
    "user_id",
    "email",
    "first_name",
    "last_name"
];

/**
 *
 */
repo.getUsers = () => {

  return new Promise((resolve, reject) => {

    db.User.findAll({attributes: cleanUserAttr}).then((users) => resolve(users), (e) => {
      reject(e);
    });
  });
};

/**
 *
 */
repo.getUsersWithRoles = () => {

  return new Promise((resolve, reject) => {

    db.User.findAll({
      attributes: cleanUserAttr,
      include: [{
        model: db.User_Role
      }]
    }).then((users) => resolve(users), (e) => {
      reject(e);
    });
  });
};

/**
 *
 * @param id
 * @returns {Promise.<Model>}
 */
repo.getUserById = (id) => {

  return new Promise((resolve, reject) => {
    db.User.findById(id).then((user) => resolve(user.clean()), () => {
      reject();
    });
  });
};

/**
 *
 * @param email
 */
repo.getUserByEmail = (email) => {

  return new Promise((resolve, reject) => {
    db.User.findOne({
      where: {
        email
      }
    }).then((user) => resolve(user), (e) =>
    {
      reject(e);
    });
  });
};

/**
 *
 * @param user
 * @returns {*|Promise}
 */
repo.createUser = (user) => {

  return new Promise((resolve, reject) => {
    db.User.create(user).then((user) => resolve(user.clean()), () => {
      reject();
    });
  });
};

/**
 *
 * @param id
 */
repo.deleteUserById = (id) => {
  return new Promise((resolve, reject) => {
    db.User.destroy({
      where: {
        user_id: id
      }
    }).then((rows) => {
      if(rows === 0) {
        reject();
      }
      else {
        resolve();
      }
    })
  });
};

/**
 *
 * @param credentials
 */
repo.authenticate = (credentials) => {

  return new Promise((resolve, reject) => {

    let email = credentials.email;
    let password = credentials.password;

    if(email && password) {

      db.User.authenticate(credentials).then((authenticatedUser) =>
      {
        // Create the access token
        let data = JSON.stringify({
          user_id: authenticatedUser.user_id,
          type: "authentication"
        });

        let accessToken = token.generateToken(data);

        if(authenticatedUser && accessToken) {
          resolve({
            user: authenticatedUser,
            accessToken: accessToken
          });
        }
        else {
          reject();
        }
      }, () =>
      {
        reject();
      });
    }
    else {
      reject();
    }
  });

};

module.exports = repo;