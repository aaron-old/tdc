'use strict';

let db = require("../models");

const PSW_RESET_VALID_FOR = 3;
const ONE_HOUR = 3600000;

let repo = {};

/**
 *
 * @param id
 * @returns {Promise.<Model>}
 */
repo.getUserById = (id) => {
    return db.User.findById(id);
};

/**
 *
 * @param email
 * @param password
 */
repo.find = (email, password) => {
  db.User.findUser(email, password, (err, user)=> {
      if(err) {
          return err;
      }
      return user;
  });
};

/**
 *
 * @param user
 * @returns {*|Promise}
 */
repo.createUser = (user) => {

    return db.User.count({where: {email: user.email}}).then((c) => {
        if(c >0) {
            throw "Account with email provided already exists";
        }
        let dbUser = db.User.Build(user);
        return dbUser.save();
    })
};

/**
 *
 * @param token
 * @returns {Promise.<Model>}
 */
repo.findUserByResetPswToken = (token) => {
  return db.User.findOne({
      where: {
          reset_password_token: token,
          reset_password_expires: { $gt: new Date()}
      }
  });
};

/**
 *
 * @param id
 * @param newPassword
 * @returns {Promise}
 */
repo.changeUserPassword = (id, newPassword) => {
  return db.User.findById(id).then((user) => {
      if(!user) {
          throw "Account Not Found"
      }
      user.password = newPassword;
      return user.save();
  })
};

/**
 *
 * @param token
 * @param newPassword
 * @returns {Promise}
 */
repo.changeUserPswAndResetToken = (token, newPassword) => {
  if(!token || token.length < 1) {
      throw "Token cannot be empty."
  }

  return db.User.findOne({
      where: {
          reset_password_token: token,
          reset_password_expires: { $gt: new Date() }
      }}
  ).then((user) => {
      if(!user) {
          throw "User Not Found"
      }

      user.password = newPassword;
      user.set("reset_password_token", null);
      user.set("reset_password_expires", null)
  })
}
;

/**
 *
 * @param id
 */
repo.removeUserById = (id) => {
    return db.User.destroy({where: {
        user_id: id
    }});
};

module.exports = repo;