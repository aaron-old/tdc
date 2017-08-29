const passport = require('passport'),
    UserRepo = require('../repositories/UserRepository'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    LocalStrategy = require('passport-jwt');


// Configuration options given for local authentication strategy.
const localOptions = {
  usernameField: 'email'
};

// Configuration options given from JWT authentication strategy.
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: process.env.SECRET_KEY || "fuzzy-bunnies"
};


passport.use(jwtLogin);