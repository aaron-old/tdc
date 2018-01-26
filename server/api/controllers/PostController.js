const HTTP = require("http-status-codes");
const PostRepo = require("../../data/repositories/PostRepository");

module.exports = {

  getAllPosts: (req, res) => {
    PostRepo.GetAllPosts()
        .then((posts) => {
          res.status(HTTP.OK).json(posts);
        })
        .catch((e) => {
          res.status(400).send(e); // TODO: Only show the error while not in production.
        });
  },

  getAllActivePosts: (req, res) => {
    PostRepo.GetAllActivePosts()
        .then((posts) => {
          res.status(HTTP.OK).json(posts);
        })
        .catch((e) => {
          res.status(400).send(e); // TODO: Only show the error while not in production.
        })
  },

  getPostById: (req, res) => {
    if (parseInt(req.params.id) === 0) {
      res.status(HTTP.BAD_REQUEST).send();
    }
    if (parseInt(req.params.id) === 2) {
      res.status(HTTP.NOT_FOUND).send();
    }
    res.status(HTTP.OK).send();
  },

  getPostBySlug: (req, res) => {
  },

  createPost: (req, res) => {
    res.status(HTTP.CREATED).json({})
  },

  deactivatePostById: (req, res) => {
    res.status(HTTP.NO_CONTENT).send();
  },

  updatePostById: (req, res) => {
    res.status(HTTP.NO_CONTENT).send();
  },

  deletePostById: (req, res) => {
    res.status(HTTP.NO_CONTENT).send();
  }
};

