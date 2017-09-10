const UserRepo = require("../repositories/UserRepository");
const db = require("../models/");

const Administrator = {};

Administrator.CreateNew = (admin = null) => {

    if(admin === null) {
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
            Administrator.AddAdminRole(user).then(() =>
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

Administrator.AddAdminRole = () => {

    return new Promise((resolve, reject) => {
       resolve();
    });
};