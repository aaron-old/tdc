
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
    }).then((roles) => resolve(roles), (e) =>
    {
      reject(e);
    })
  });
};

module.exports = repo;