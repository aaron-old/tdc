const localStrategy = require("passport-local");
const connection = require("../dal/connection");

module.exports = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {

        let conn = new connection();
        conn.openConnection();

        conn.query("select * from users where user_id = " + id, function (err, rows){
            done(err, rows[0]).then(function () {

            });
        });

        conn.terminateConnection();
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