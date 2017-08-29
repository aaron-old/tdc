const UserRepo = require('../repositories/UserRepository');
const isDevOrTest = require('../helpers').isDevOrTest;
const _ = require('lodash');

// TODO: Add mail-gun

/**
 * Login controller method.
 * @param req
 * @param res
 * @constructor
 */
exports.Login = (req, res) => {

  let credentials = _.pick(req.body, "email", "password");

  UserRepo.authenticate(credentials).then((authUser) =>
  {
    res.header("Authorization", authUser.accessToken).json(authUser.user);
  }, (e) =>
  {
    if(isDevOrTest()) {
      res.status(401).send(e);
    }
    res.status(401).send();
  });
};


exports.Logout = (req, res) => {

};