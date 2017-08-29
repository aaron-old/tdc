
module.exports = (db, DataTypes) => {

    let Permission = db.define("Permission", {

        permission_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        permission_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        permission_description: {
            type: DataTypes.TEXT
        }
    }, {

        tableName: "permission",
        underscored: true
    });

    // Class Methods

    // Associations


    // Instance Methods

    return Permission;
};