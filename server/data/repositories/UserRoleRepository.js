let db = require("../models");
let repo = {};

repo.CreateUserRole = (userId, roleId) => {

    return new Promise((resolve, reject) => {
        db.User_Role.create({
            user_id: userId,
            role_id: roleId
        }).then(() =>
        {
            resolve()
        }, () =>
        {
            reject();
        });
    });
};

module.exports = repo;