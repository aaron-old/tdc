const isDevOrTest = require("../helpers").isDevOrTest;
const token = require("./Jwt");
const UserRepo = require("../repositories/UserRepository");
const _ = require("lodash");

module.exports = (db) => {

  /**
   * Returns am object from the requesting client's browser/cookie
   * @returns {null}
   */
  let tryGetJwtBrowser = () => {
    return null;
  };

  /**
   * Returns the jwt from the incoming request header.
   * @param req
   */
  let tryGetJwtHeader = (req) => {
    return req.get("Authorization");
  };

  /**
   * Method collecting the jwt for an incoming request.
   * @param req
   * @returns {null}
   */
  let tryGetJwt = (req) => {

    let jwt = tryGetJwtBrowser();

    if(!jwt) {
      jwt = tryGetJwtHeader(req);
    }

    return jwt;
  };

  /**
   * Method for authenticating user with jwt.
   * @param jwt
   * @param req
   * @param res
   * @param next
   */
  let authenticateUserWithJwt = (jwt, req, res, next) => {

    let tokenData = token.decodeJwtToken(jwt);

    UserRepo.getUserById(tokenData.user_id).then((user) =>
    {
      req.user = user;
      next();
    }, (e) =>
    {
      if(isDevOrTest()){
        res.status(401).send(e)
      }
      res.status(401).send();
    });
  };


  return {

    /**
     * Middleware authentication function that checks for user auth.
     * @param req
     * @param res
     * @param next
     */
    requireUserAuthentication: (req, res, next) => {

      // TODO: Create a method elsewhere that will check the browser for a token.
      // TODO: If there is no token grab one from the request.
      // TODO: If there is none from the request navigate the user to login.

      let jwt = tryGetJwt(req);
      if (jwt) {
        authenticateUserWithJwt(jwt, req, res, next);
      }
      res.status(400).send();
    },

    /**
     * Middleware authentication function that checks for user auth with admin role
     * @param req
     * @param res
     * @param next
     */
    requireAdminAuthentication: (req, res, next) => {
      
      next();
      // let jwt = tryGetJwt(req);
      // if(jwt) {
      //   authenticateUserWithJwt(jwt, req, res, next);
      // }
      // else {
      //   let credentials = _.pick(req.body, "email", "password");
      //   authenticateUserWithLocal(credentials, req, res, next);
      // }
    }
  }
};