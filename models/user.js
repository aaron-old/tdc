'use strict';
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('User', {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Post);
      }
    }
  });
  return User;
};