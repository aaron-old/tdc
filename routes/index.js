let User = require("../dal/models/user");
let db = require("../models");
const routes = require("express").Router();

routes.get('/posts', (req, res) => {
    res.status(200).json({message: "connected"});
});

routes.get("/users", (req, res) => {

    try {
        User.index(res);
        return res.status(200).json({
            user: "aaron"
        })
    }
    catch (e) {
        console.debug(e);
        res.status(500);
    }
});

routes.get("/users/:id", (req, res) => {

    // test that the id
    try {
        User.find(req.params.id, res);
    }
    catch (e) {
        res.status(500);
    }
});

routes.post("/users", (req, res) => {
    let user = req.body;

    db.User.create(user).then((user) => {
        res.status(201).json(user.cleanUser());
    }, (e) => {
        res.status(400).json(e);
    });

});


module.exports = routes;
