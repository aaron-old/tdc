const routes = require('express').Router();
const passport = require('passport');
const user = require("../dal/models/user");

routes.get('/posts', (req, res)=> {
    res.status(200).json({message: "connected"});

    // Create a connection to db?
    // let posts = new Posts()
    // posts.getXYZ
});

routes.get("/users", (req, res) => {

    try {
        user.index(res);
    }
    catch(e) {
        console.debug(e);
        res.status(500);
    }
});

routes.get("/users/:id", (req, res) => {

    // test that the id
    try {
        user.find(req.params.id, res);
    }
    catch(e) {
        res.status(500);
    }
});

routes.post("/users", (req, res) =>{
    try {
        return res.status(200).json(req.body);
    }
    catch(e) {
        res.status(500);
    }
});

module.exports = routes;
