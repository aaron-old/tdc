const UserRepo = require("../repositories/UserRepository");
const Author = {};


Author.CreateNew = (author) => {

  return new Promise((resolve, reject) => {
    if(author) {
      resolve({user_id: 1, firstName: "test"});
    }
    reject("No Author");
  });

  // Should return a promise to the controller once completed.

  // Receive the author request body { firstName, lastName, email }

  // Author object has the proper role set applied.

  // Author object has generated temporary password applied.

  // User is created as an author.

  // Email is sent to author


};

module.exports = Author;