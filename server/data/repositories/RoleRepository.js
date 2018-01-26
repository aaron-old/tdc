let db = require('../models');
let repo = {};

repo.GetUserRoles = (userId) => {
  return new Promise((resolve, reject) => {
    db.User_Role.findAll({
      include: [{
        model: db.Role,
      }],
      where: {
        user_id: userId
      }
    }).then((roles) => resolve(roles), (e) => {
      reject(e);
    })
        .catch((e) => {

        })
  });
};


repo.GetRoleByRoleName = (roleName) => {

  return new Promise((resolve, reject) => {

    if (roleName) {

      db.Role.findOne({
        where: {
          role_name: roleName
        }
      }).then((role) => {
        resolve(role);
      }, (e) => {
        reject(e);
      });
    }
    else {
      let err = new Error("Role name cannot be null");
      reject(err);
    }
  });
};

module.exports = repo;