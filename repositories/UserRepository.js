'use strict';

let db = require("../models");

let repo = {};

/**
 *
 */
repo.getUsers = () => {

    return new Promise((resolve, reject) =>
    {

        db.User.findAll().then((users) => resolve(users), (e) =>
        {
            reject();
        });
    });
};

/**
 *
 * @param id
 * @returns {Promise.<Model>}
 */
repo.getUserById = (id) => {

    return new Promise((resolve, reject) =>
    {
        db.User.findById(id).then((user) => resolve(user.clean()), () =>
        {
            reject();
        });
    });
};


/**
 *
 * @param user
 * @returns {*|Promise}
 */
repo.createUser = (user) => {

    return new Promise((resolve, reject) =>
    {
        db.User.create(user).then((user) => resolve(user.clean()), () =>
        {
            reject();
        });
    });
};

/**
 *
 * @param tokens
 */
repo.authenticateUser = (tokens) => {

    return new Promise((resolve, reject) =>
    {
        db.User.authenticate(tokens).then((user) =>
        {
            let authToken = user.generateToken("authentication");
            if(authToken) {

                resolve({
                    user: user,
                    authToken: authToken
                });
            }
            else {
                reject();
            }
        });
    });
};

module.exports = repo;