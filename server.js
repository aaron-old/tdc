require("dotenv").config();

const express = require("express");
const fs = require("fs");
const compression = require("compression");
const bodyParser = require("body-parser");
const logger = require("morgan");
const session = require("express-session");
const methodOverride = require("method-override");
const passport = require("passport");
const app = express();

app.set("port", process.env.PORT || 3000);

const routes = require("./routes/index");

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.use(compression());
    app.use((err, req, res, next) => {
        res.status(err.status || 500)
            .json({
                status: "error",
                message: err.message
            });
    });
}else {
    app.use(logger("dev"));
    app.use((err, req, res, next) => {
        res.status(err.status || 500)
            .json({
                status: "error",
                message: err
            });
    });
}

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

//app.use("/api", routes);


app.listen(app.get("port") , () => {
   console.log(`find the server at: http://localhost:${app.get("port")}/`);
});

module.exports = app;
