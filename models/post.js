'use strict';
module.exports = function(sequelize, DataTypes) {
  //noinspection JSUnresolvedVariable
    let Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Post.belongsTo(models.User);
      }
    }
  });
  return Post;
};