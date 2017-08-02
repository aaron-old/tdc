
let db = require("../models");
let _ = require("lodash");

let repo = {};

/**
 *
 */
repo.getPosts = () => {

    return new Promise((resolve, reject) =>
    {
        db.Post.findAll().then((posts) => resolve(posts), (e) =>
        {
            reject();
        });
    });
};

/**
 *
 * @param id
 */
repo.getPostById  = (id) => {

    return new Promise((resolve, reject) =>
    {
        db.Post.findById(id).then((post) => resolve(post), (e) =>
        {
            reject();
        });
    });
};

/**
 *
 * @param slug
 */
repo.getPostBySlug = (slug) => {

    return new Promise((resolve, reject) =>
    {
        db.Post.find({
            where: {
                slug: slug
            }
        }).then((post) => resolve(post), (e) =>
        {
            reject();
        });
    });
};

/**
 *
 * @param post
 */
repo.createPost = (post) => {

    return new Promise((resolve, reject) =>
    {
        db.Post.create(post).then((post) => resolve(post), (e) =>
        {
            reject();
        });
    });
};

repo.updatePost = (id, body) => {

    let request = _.pick(body, "title", "content", "publish");
    let attributes = {};

    for(let property in request) {
        if(request.hasOwnProperty(property)) {
            attributes[property] = body[property];
        }
    }

    return new Promise((resolve, reject) =>
    {
        db.Post.findById(id).then((post) =>
        {
            if(post) {
                post.update(attributes).then((updatedPost) => {
                    resolve(updatedPost.dataValues)
                });
            }
            else {
                reject();
            }
        }, (e) =>
        {
            reject();
        });
    });
};

repo.deletePostById = (id) => {

    return new Promise((resolve, reject) =>
    {
        db.Post.destroy({
            where: {
                post_id: id
            }
        }).then((rows) => {

            if(rows === 0) {
                reject();
            }
            resolve();
        });
    });
};

module.exports = repo;