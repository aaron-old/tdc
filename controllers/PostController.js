
let postRepository = require("../repositories/PostRepository");
let _ = require("lodash");

/**
 *
 * @param req
 * @param res
 * @constructor
 */
exports.GetAllPost = (req, res) => {

    postRepository.getPosts().then((posts) => res.status(200).json(posts), (e) =>
    {
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
    if(typeof id !== "number") { return this.GetPostBySlug(req, res)}
    if(id) {
        postRepository.getPostById(id).then((post) => res.status(200).json(200), (e) =>
        {
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
exports.GetPostBySlug = (req, res) => {

    let slug = req.params.id;
    if(slug) {
        postRepository.getPostBySlug(slug).then((post) => res.status(200).json(200), (e) =>
        {
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
exports.CreatePost = (req, res) => {

    let post = req.body;
    if(post) {
        postRepository.createPost(post).then((post) => res.status(200).json(post), (e) =>
        {
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
exports.UpdatePostById = (req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body, "title", "content", "publish");

    postRepository.updatePost(id, body).then((updatedPost) => {
        res.status(204).json(updatedPost)

    }, (e) => {
        res.status(400).send();
    })
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
        postRepository.deletePostById(id).then(() => res.status(204).send(), (e) =>
        {
            res.status(400).send();
        });
    }
};
