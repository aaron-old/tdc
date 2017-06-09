const routes = require('express').Router();

routes.get('/posts', (req, res)=> {

    res.status(200).json({message: "connected"})
});

module.exports = routes;