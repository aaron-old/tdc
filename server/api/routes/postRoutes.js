const ENDPOINT_NAME = "/post";
let PostController = require("../controllers/PostController");
module.exports = (router) => {
  router.get(ENDPOINT_NAME, PostController.getAllPosts);
  router.get(`${ENDPOINT_NAME}/:id`, PostController.getPostById);
  router.put(ENDPOINT_NAME, PostController.createPost);
  router.post(`${ENDPOINT_NAME}/deactivate/:id`, PostController.deactivatePostById);
  router.post(`${ENDPOINT_NAME}/:id`, PostController.updatePostById);
  router.delete(`${ENDPOINT_NAME}/:id`, PostController.deletePostById)
};