
module.exports = (db, DataTypes) => {

    let UserRole = db.define("User_Role", {

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    }, {
        tableName: "user_role",
        underscored: true
    });
    UserRole.associate = function (models) {
        UserRole.belongsTo(models.User, {foreignKey: "user_id"});
        UserRole.belongsTo(models.Role, {foreignKey: "role_id"});
    };
    return UserRole;
};
