'use strict';

let db = require("../models");
let _ = require('lodash');
let token = require("../auth/Jwt");
let repo = {};

const cleanUserAttr = [
  "user_id",
  "email",
  "first_name",
  "last_name"
];
const includeRoles  = {
  model : db.Role,
  attributes: {
    exclude: ['created_at', 'role_description', 'updated_at']
  },
  through: {
    attributes: []
  }
};

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
      include: [includeRoles]
    }).then((users) => resolve(users), (e) => {
      reject(e);
    });
  });
};

/**
 *
 * @returns {Promise.<Model>}
 * @param user_id
 */
repo.getUserById = (user_id) => {

  return new Promise((resolve, reject) => {
    db.User.findOne({
      include: [includeRoles],
      where: {user_id}
    }).then((user) => resolve(user.clean()), () => {
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
    }).then((user) => resolve(user), (e) => {
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
      if (rows === 0) {
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

    if (email && password) {

      db.User.authenticate(credentials).then((authenticatedUser) => {

        // Clean up the user roles object.
        let roles = [];
        authenticatedUser.Roles.forEach((element) => {
          roles.push({
            roleId: element.role_id,
            roleName: element.role_name
          })
        });

        // Create the access token
        let data = JSON.stringify({
          user_id: authenticatedUser.user_id,
          roles: roles,
          type: "authentication"
        });

        let accessToken = token.generateToken(data);

        if (authenticatedUser && accessToken) {
          resolve({
            user: authenticatedUser,
            accessToken: accessToken
          });
        }
        else {
          reject();
        }
      }, () => {
        reject();
      });
    }
    else {
      reject();
    }
  });

};

module.exports = repo;