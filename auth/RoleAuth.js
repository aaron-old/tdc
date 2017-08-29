module.exports = (db) => {

  const ADMIN_ROLE = "";

  return {

    hasRoleAdmin: (userId) => {

      // TODO: Check the database if the user has the role of ADMIN

      return new Promise((resolve, reject) => {

        db.User.findAll({
          where: {
            user_id: userId
          },
          include: [{
            model: "User_Role"
          }]
        }).then((user) =>
        {
          console.log(user);
        }, (e) =>
        {
          reject(e)
        })
      })

    }
  }

};