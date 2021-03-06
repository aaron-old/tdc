
module.exports = (db, DataTypes) => {

    let Role = db.define("Role", {

        role_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        role_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        role_description: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: "role",
        underscored: true
    });

    Role.associate = function (models) {
      Role.belongsToMany(models.User, {foreignKey: "role_id", through: 'user_role'} );
    };

    return Role;
};