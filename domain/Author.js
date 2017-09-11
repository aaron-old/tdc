const UserRepo = require("../repositories/UserRepository");
const Role = require("./Role");
const MailGun = require("../config/mailgun");
const Author = {};

const AUTHOR_ROLE_NAME = "AUTHOR"; // TODO: Change this to a configuration setting.


Author.CreateNew = (author) => {

    return new Promise((resolve, reject) => {

        // Generate a reset password token.

        // Generate the expiration for the token

        //MailGun.sendEmail(author.email, { text: "Test Author Registration"});

        UserRepo.createUser({
            email: author.email,
            password: Math.random().toString(36).slice(-8),
            Profile: [{
                first_name: author.firstName,
                last_name: author.lastName
            }],
        }).then((user) =>
        {
            Role.AddRole(AUTHOR_ROLE_NAME, user.user_id).then(() =>
            {
                // Send the email to the user
                resolve(user);
            }, (e) =>
            {
                reject(e);
            });

        }, (e) =>
        {
            reject(e);
        });
    });
};


module.exports = Author;