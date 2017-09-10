const AuthorDomain = require("../domain/Author");
const isDevOrTest = require("../helpers").isDevOrTest;
const _ = require("lodash");
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

registration.CreateSubscriber = (req, res) => {
  res.status(200).send();
};

module.exports = registration;