
module.exports = (db, DataTypes) => {

    let RolePermission = db.define("RolePermission", {

        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        permission_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    }, {
        tableName: "role_permission",
        underscored: true
    });

    RolePermission.associate = function (models) {
        RolePermission.belongsTo(models.Role, {foreignKey: "role_id"});
        RolePermission.belongsTo(models.Permission, { foreignKey: "permission_id"});
    };
    return RolePermission;
};