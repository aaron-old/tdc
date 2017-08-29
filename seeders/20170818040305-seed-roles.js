'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('role', [
      {
        role_name: "ADMIN",
        role_description: "Application root administrator",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        role_name: "AUTHOR",
        role_description: "Application author role",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        role_name: "SUBSCRIBER",
        role_description: "Application role for users subscribing to blog content",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('role', [
      {
        role_name: [
            "ADMIN",
            "AUTHOR",
            "SUBSCRIBER"
        ]
      }
    ]);
  }
};
