'use strict';

let bcrypt = require("bcrypt-nodejs");
let _ = require("lodash");

let hooks = {

    // Validates that the users email is changed to lowercase.
    beforeValidate: (user) => {
        if (typeof user.email === "string") {
            user.email.toLowerCase();
        }
    }
};

module.exports = (db, DataTypes) => {

    let User = db.define("User", {
            user_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            password: {
                type: DataTypes.VIRTUAL,
                set: function (value) {
                    let salt = bcrypt.genSaltSync(10);
                    let hashedPw = bcrypt.hashSync(value, salt);

                    this.setDataValue("password", value);
                    this.setDataValue("salt", salt);
                    this.setDataValue("password_hash", hashedPw);
                }
            },
            salt: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password_hash: {
                type: DataTypes.STRING,
                allowNull: false
            },
            google_id: {
                type: DataTypes.STRING,
                unique: true
            },
            facebook_id: {
                type: DataTypes.STRING,
                unique: true
            },
            twitter_id: {
                type: DataTypes.STRING,
                unique: true
            },
            reset_password_expires: DataTypes.STRING,
            reset_password_token: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                isEmail: true
            }
        },
        {
            hooks: {
                beforeValidate: hooks.beforeValidate
            },
            tableName: "user",
            underscored: true,
        });

    /**
     *
     * @param body
     * @returns {Promise}
     */
    User.authenticate = function (body) {

        return new Promise((resolve, reject) => {

            let email = body.email,
                password = body.password;

            if (typeof email !== "string" || typeof password !== "string") {
                return reject();
            }

            User.findOne({
                where: {email},
                include: [{
                    all: true
                }]
            }).then((user) => {
                if (!user || !bcrypt.compareSync(body.password, user.get("password_hash"))) {
                    return reject();
                }
                resolve(user.clean());
            }, (e) => {
                reject(e);
            });

        });
    };

    /**
     *
     * @param models
     */
    User.associate = function (models) {
        User.hasOne(models.Profile);
        User.belongsToMany(models.Role, {foreignKey: "user_id", through: "user_role"});
    };

    /**
     *
     */
    User.prototype.clean = function () {
        let json = this.toJSON();
        return _.pick(json, ["user_id", "email", "Roles", "Profile"]);
    };

    return User;
};