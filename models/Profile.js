module.exports = (db, DataTypes) => {

  let Profile = db.define("Profile", {

    profile_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {
    tableName: "profile",
    underscored: true
  });
  return Profile;
};