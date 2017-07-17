
let db = require("../models");


exports.CreatePost = (req, res) => {
    let body = req.body;
    db.Post.create(body).then((post) => {
        res.status(201).json(post);
    }, (e) => {
        res.status(400).send();
    });
};

exports.GetAllPost = (req, res) => {
    db.Post.findAll().then((post) => {
        res.status(200).json(post);
    }, (e) => {
        res.status(400).send();
    });
};

exports.GetPostById = (req, res) => {

    let id = req.params.id;
    if(id) {
        db.Post.findById(id).then((post) => {
            res.status(200).json(post);
        }, () => {
            res.status(400).send();
        })
    }
};

exports.GetPostBySlug = (req, res) => {};

exports.UpdatePostById = (req, res) => {};

exports.DeletePostById = (req, res) => {};
