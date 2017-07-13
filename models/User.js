'use strict';

let bcrypt = require("bcrypt-nodejs");
let crypto = require("crypto");

let instanceMethods = {
    hasSetPassword: () => {
        return this.password != null && this.password.length > 0;
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
            password: DataTypes.STRING,
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
            tableName: "user",
            underscored: true,
            instanceMethods: instanceMethods,
            classMethods: {
                associate: function (models) {},
                encryptPassword: (password, cb) => {
                    if (!password) {
                        cb('', null);
                        return;
                    }
                    bcrypt.genSalt(10, (err, salt) => {
                        if (err) {
                            cb(null, err);
                            return;
                        }
                        bcrypt.hash(password, salt, null, (hErr, hash) => {
                            if (hErr) {
                                cb(null, hErr);
                                return;
                            }
                            cb(hash, null);
                        });
                    });
                },
                findUser: function (email, password, cb) {
                    User.findOne({
                        where: {email: email}
                    }).then(function (user) {
                        if (user == null || user.password == null || user.password.length === 0) {
                            cb('User / Password combination is not correct', null);
                            return;
                        }
                        bcrypt.compare(password, user.password, (err, res) => {
                            if (res)
                                cb(null, user);
                            else
                                cb(err, null);
                        });
                    }).catch((err) => {cb(err, null); });
                }
            }
        });
    return User;
};