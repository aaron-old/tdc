module.exports = (db, DataTypes) => {

    let Post = db.define("Post", {
        post_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        publish: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: "post",
        underscored: true,

    });

    // Class Methods

    // Instance Methods

    // Associations
    Post.associate = function (models) {
        Post.belongsTo(models.User, {foreignKey: "created_by"})
    };

    return Post;
};