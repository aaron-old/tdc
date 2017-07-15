'use strict';

let bcrypt = require("bcrypt-nodejs");
let _ = require("lodash");


let instanceMethods = {
    hasSetPassword: () => {
        return this.password != null && this.password.length > 0;
    }

};

let hooks = {

    beforeValidate: (user, options) => {
        // Ensure user.email is a string...
        // If it is, then set the string to lowercase, else, throw validation error.

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
                type: DataTypes.STRING
            },
            password_hash: {
                type: DataTypes.STRING
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
            },
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
        },
        {
            hooks: {
                beforeValidate: hooks.beforeValidate
            },
            tableName: "user",
            underscored: true,
        });

        // Class Methods
        User.authenticate = function(body) {
            return new Promise((resolve, reject) => {

                if(typeof body.email !== "string" || typeof body.password !== "string") {
                    return reject();
                }
                User.findOne({
                    where: {
                        email: body.email
                    }
                }).then((user) => {
                    if(!user || !bcrypt.compareSync(body.password, user.get("password_hash"))){
                        return reject();
                    }
                    resolve(user.cleanUser());
                }, (e) => {
                    reject(e);
                })
            })
        };


        // Instance Methods
        User.prototype.cleanUser = function() {
            let json = this.toJSON();
            return _.pick(json, ["user_id", "email", "first_name", "last_name"]);
        };
        return User;
};