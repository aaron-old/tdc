
module.exports = (db, DataTypes) => {

    let PostPhoto = db.define("Post_Photo", {

        photo_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true

        }
    }, {
        tableName: "post_photo",
        underscored: true
    });

    PostPhoto.associate = function (models) {
        PostPhoto.belongsTo(models.Photo, { foreignKey: "photo_id"});
        PostPhoto.belongsTo(models.Post, { foreignKey: "post_id"});
    };
    return PostPhoto;
};