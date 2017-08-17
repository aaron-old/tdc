let cryptjs = require("crypto-js");

module.exports = (sequelize, DataTypes) => {

    let Token = sequelize.define("token", {

        token: {
            type: DataTypes.VIRTUAL,
            allowNull: false,
            validate: {
                len: [1]
            },
            set: (value) => {

                let hash = cryptjs.MD5(value).toString();

                this.setDataValue("token", value);
                this.setDataValue("tokenHast", hash);
            }
        },
        tokenHash: DataTypes.STRING
    }, {
        tableName: "token",
        underscored: true
    });

    return Token
};