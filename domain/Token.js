const Token  = {};
const jwt = require("jsonwebtoken");

Token.CreateOneTimeToken = (config) => {

    return new Promise((resolve, reject) => {

        try {
            resolve(jwt.sign({
                data: config.data,
                exp: 10
            }, process.env.JWT_SECRET));
        }
        catch(e) {
            reject(e);
        }
    });
};

module.exports = Token;

