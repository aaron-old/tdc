
let db = require("../models");
let _ = require("lodash");

/**
 *
 * @param req
 * @param res
 * @constructor
 */
exports.CreatePost = (req, res) => {
    let body = req.body;
    db.Post.create(body).then((post) => {
        res.status(201).json(post);
    }, () => {
        res.status(400).send();
    });
};

/**
 *
 * @param req
 * @param res
 * @constructor
 */
exports.GetAllPost = (req, res) => {
    db.Post.findAll().then((post) => {
        res.status(200).json(post);
    }, () => {
        res.status(400).send();
    });
};

/**
 *
 * @param req
 * @param res
 * @constructor
 */
exports.GetPostById = (req, res) => {

    let id = req.params.id;
    if(id) {
        db.Post.findById(id).then((post) => {
            res.status(200).json(post);
        }, () => {
            res.status(400).send();
        });
    }
};

/**
 *
 * @param req
 * @param res
 * @constructor
 */
exports.GetPostBySlug = (req, res) => {};

/**
 *
 * @param req
 * @param res
 * @constructor
 */
exports.UpdatePostById = (req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body, "title", "content", "publish");
    let attributes = {};

    for(let property in body) {
        if(body.hasOwnProperty(property)){
            attributes[property] = body[property];
        }
    }

    db.Post.findById(id).then((post) => {

        if(post) {
            return post.update(attributes);
        }
        else {
            res.status(404).send();
        }
    }, () => {
        res.status(500).send();
    }).then((post) => {
        res.status(204).json(post);
    }, () => {
        res.status(400).send();
    });
};

/**
 *
 * @param req
 * @param res
 * @constructor
 */
exports.DeletePostById = (req, res) => {

    let id = req.params.id;
    if(id) {
        db.Post.destroy({
            where: {
                post_id: id
            }
        }).then((rows) => {

            if(rows === 0) { res.status(404).send();}
            res.status(204).send();
        }, () => {
            res.status(500).send();
        });
    }
};
