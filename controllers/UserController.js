let userRepositories = require("../repositories/UserRepository");
let _ = require("lodash");

/**
 *
 * @param req
 * @param res
 * @constructor
 */
exports.GetUsers = (req, res) => {

    userRepositories.getUsers().then((users) => res.status(200).json(users), (e) =>
    {
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
        userRepositories.getUserById(id).then((user) => res.status(200).json(user), (e) =>
        {
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
        userRepositories.createUser(user).then((user) => res.status(201).json(user), (e) =>
        {
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
exports.Login = (req, res) => {

    let tokens = _.pick(req.body, "email", "password");
    if (tokens) {
        userRepositories.authenticateUser(tokens).then((authUser) =>
        {
            res.header("Auth", authUser.authToken).json(authUser.user);
        }, (e) =>
        {
            res.status(401).send();
        });
    }
};