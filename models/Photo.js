
module.exports = (db, DataTypes) => {

    let Photo = db.define("Photo", {

        photo_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        photo: {
            type: DataTypes.BLOB,
            allowNull:false
        },
        photo_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: "photo",
        underscored: true
    });
    return Photo;
};