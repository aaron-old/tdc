
let RoleRepository = require('../repositories/RoleRepository');
let isDevOrTest = require('../helpers').isDevOrTest;

let controller = {};

/**
 * Method retrieving a users roles based of their id.
 * @param req
 * @param res
 * @constructor
 */
controller.GetUserRoles = (req, res) => {

  let userId = req.params.id;

  if(userId) {

    RoleRepository.GetUserRoles(userId).then((roles) =>
    {
      res.status(200).json(roles);

    }, (e) =>
    {
      if(isDevOrTest()) {
        res.status(400).send(e);
      }
      res.status(400).send();
    })
  }
};

controller.AddUserRole = (req, res) => {};

controller.UpdateUserRole = (req, res) => {};

controller.RemoveUserRole = (req, res) => {};

module.exports = controller;