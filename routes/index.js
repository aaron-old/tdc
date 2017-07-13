let User = require("../dal/models/user");
const routes = require("express").Router();

routes.get('/posts', (req, res)=> {
    res.status(200).json({message: "connected"});
});

routes.get("/users", (req, res) => {

    try {
        User.index(res);
    }
    catch(e) {
        console.debug(e);
        res.status(500);
    }
});

routes.get("/users/:id", (req, res) => {

    // test that the id
    try {
        User.find(req.params.id, res);
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


module.exports = (app, passport) => {

    app.use("/api", routes);
    app.post("/login", passport.authenticate("local-login"), {
        successRedirect: "/author",
        failureRedirect: "/login"
    })

};


// module.exports = routes;
