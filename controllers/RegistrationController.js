const AuthorDomain = require("../domain/Author");
const isDevOrTest = require("../helpers").isDevOrTest;
const _ = require("lodash");
const registration = {};

registration.CreateAuthor = (req, res) => {

  AuthorDomain.CreateNew({ email: "mustarddevelopment@gmail.com"}).then((author) => {
    res.status(201).json(author);
  }, (e) =>{

    if(isDevOrTest()) {
      res.status(400).send(e);
    }
    res.status(400).send();
  });
};

registration.CreateSubscriber = (req, res) => {
  res.status(200).send();
};

module.exports = registration;