"use strict";

let passport = require("passport");
let LocalStrategy = require("passport-local").Strategy;

let UserRepo = require("../repositories/UserRepository");

passport.serializeUser((user, done)=> {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    UserRepo.getUserById(id).then((user) => {
        done(null, user);
    }).catch((err) => done(err));
});

passport.use(new LocalStrategy({usernameField: "email"}, (email, password, done) => {
    email = email.toLowerCase();
    UserRepo.find(email, password, (err, user) => {
        if(err) {
            return done(err, null);
        }
        return done(null, user);
    })
}));

exports.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) return next();
    // How to handle server authentication with client side react.
    //res.redirect()
};
exports.isAuthorized = (req, res, next) => {
    let provided = req.path.split("/").slice(-1)[0];
    if(req.user.tokens[provider]){
        next();
    }
};