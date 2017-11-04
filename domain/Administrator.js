const UserRepo = require("../repositories/UserRepository");
const Role = require("./Role");

const Administrator = {};
const ADMINISTRATOR_ROLE_NAME = "ADMIN"; // TODO: Change this to a configuration setting.

Administrator.CreateNew = (admin = null) => {

    if(admin === null) {
        admin = {};
        admin.email     = process.env.ADMINISTRATOR_EMAIL || "mustarddevelopment@gmail.com";
        admin.password  = process.env.ADMINISTRATOR_PASSWORD || "123";
        admin.firstName = process.env.ADMINISTRATOR_FIRST_NAME || "Test";
        admin.lastName  = process.env.ADMINISTRATOR_LAST_NAME || "Admin"
    }
    return new Promise((resolve, reject) => {

        UserRepo.createUser({
            email: admin.email,
            password: admin.password,
            Profile: {
                first_name: admin.firstName,
                last_name: admin.lastName
            }
        }).then((user) =>
        {
            Role.AddRole(ADMINISTRATOR_ROLE_NAME, user.user_id).then(() =>
            {
                resolve(user)
            }, (e) =>
            {
                reject(e)
            });
        }, (e) =>
        {
            reject(e);
        });
    });
};

module.exports = Administrator;