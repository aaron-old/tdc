const UserRepo = require("../repositories/UserRepository");
const Role = require("./Role");
const Token = require("./Token");
const Email = require("./Email");

const Author = {};
const AUTHOR_ROLE_NAME = "AUTHOR"; // TODO: Change this to a configuration setting.

Author.CreateNew = (author) => {

    return new Promise((resolve, reject) => {

        // TODO Generate a reset password token.
        // TODO Generate the expiration for the token

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
                Token.CreateOneTimeToken({data: user}).then((token) =>
                {
                    Email.SendVerifyRegistration(token, user.email);
                    resolve(user);
                }, () =>
                {
                    reject();
                });
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