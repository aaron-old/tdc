let localStrategy = require("passport-local");
let db = require("../dal/connection");
let User = require("../dal/models/user");

module.exports = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user.user_id);
    });

    passport.deserializeUser((id, done) => {
        db.query("select * from users where user_id = " + id, function (err, rows){
            done(err, rows[0]).then(function () {

            });
        })
    });

    passport.use("local-signup", new LocalStrategy({

        _usernameField      : "email",
        _passwordField      : "password",
        _passReqToCallback : true
    },
        function(req, email, password, done) {

            connection.query
        }

    ))
};