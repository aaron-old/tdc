const UserRepo = require("../repositories/UserRepository");
const db = require('../models/');
const MailGun = require("../config/mailgun");
const Author = {};


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
            Author.AddAuthorRole(user).then(() =>
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

Author.AddAuthorRole = (user) => {

    return new Promise((resolve, reject) => {

        db.Role.findOne({
            where: {
                role_name: "AUTHOR"
            }
        }).then((role) =>
        {
            db.User_Role.create({
                user_id: user.user_id,
                role_id: role.role_id
            }).then(() =>
            {
                resolve();
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