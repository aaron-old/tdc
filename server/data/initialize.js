let db = require("./models");
module.exports = () => {
  if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {

    if(process.env.FORCE_SYNC === "true") {
      db.sequelize.drop().then(db.sequelize.sync);
    }
    else {
      db.sequelize.sync();
    }
  }
};