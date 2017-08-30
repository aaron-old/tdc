const UserRepo = require("../repositories/UserRepository");
const MailGun = require("../config/mailgun");
const Author = {};


Author.CreateNew = (author) => {

  return new Promise((resolve, reject) => {

    if(author) {

      //MailGun.sendEmail(author.email, { text: "Test Author Registration"});

      resolve({});
    }
    reject("No Author");
  });

  // Should return a promise to the controller once completed.

  // Receive the author request body { firstName, lastName, email }

  // Author object has the proper role set applied.

  // Author object has generated temporary password applied.

  // User is created as an author.

  // Email is sent to author

  // Setup the template for html registration email.


};

module.exports = Author;