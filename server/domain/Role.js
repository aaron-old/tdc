const RoleRepo = require("../repositories/RoleRepository");
const UserRoleRepo = require("../repositories/UserRoleRepository");
const Role = {};

Role.AddRole = (roleName, userId) => {

    return new Promise((resolve, reject) => {

        if(roleName) {

            RoleRepo.GetRoleByRoleName(roleName).then((role) =>
            {
                UserRoleRepo.CreateUserRole(userId, role.role_id).then(() =>
                {
                    resolve();
                }, () => {
                    reject();
                });

            }, (e) =>
            {
                reject(e);
            });
        }
        else {
            reject();
        }
    });
};

module.exports = Role;
