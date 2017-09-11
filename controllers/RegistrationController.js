const AuthorDomain = require("../domain/Author");
const AdminDomain = require("../domain/Administrator");
const registration = {};

registration.CreateAuthor = (req, res) => {

    AuthorDomain.CreateNew(req.body).then((author) =>
    {
        res.status(201).json(author);
    }, (e) =>
    {
        res.status(400).send(e);
    });
};

registration.CreateAdmin = (req, res) => {

    // TODO: change the parameters to have the request body.
    AdminDomain.CreateNew().then((admin) =>
    {
        res.status(201).json(admin);
    },(e) =>
    {
        res.status(400).send(e);
    })
};

registration.CreateSubscriber = (req, res) => {
    res.status(200).send();
};

module.exports = registration;