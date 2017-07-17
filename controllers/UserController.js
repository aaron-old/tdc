
let db = require("../models");
let _  = require("lodash");

exports.GetUsers = (req, res) => {

    db.User.findAll().then((users) => {
        res.status(200).json(users);
    }, (e) => {
        res.status(400).send();
    })
};

exports.GetUserById = (req, res) => {
    let id = req.params.id;
    if(id) {

        db.User.findById(id).then((user) => {
            res.status(200).json(user.clean());
        }, () => {
            res.status(400).send();
        });
    }
};

exports.CreateUser = (req, res) => {
    let user = req.body;
    db.User.create(user).then((user) => {
        res.status(201).json(user.clean());
    }, (e) => {

        if(process.env.NODE_ENV === "production") {
            res.status(400).send();
        }
        res.status(400).json(e);
    });
};

exports.Login = (req, res) => {
    let body = _.pick(req.body, "email", "password");
    db.User.authenticate(body).then( (user) => {
        let token = user.generateToken("authentication");
        if(token) {
            res.header("Auth", token).json(user.clean());
        }
        else {
            res.staus(401).send(e);
        }

    }, (e) => {
        res.status(401).send(e);
    });
};