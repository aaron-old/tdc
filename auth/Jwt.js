const jwt = require('jsonwebtoken');
const crypto = require('crypto-js');
const isDevOrTest = require('../helpers').isDevOrTest;

module.exports = {

    /**
     * Generates a jwt token for a request.
     * @param data
     * @returns {*}
     */
    generateToken: (data) => {

        try {
            return jwt.sign({
                data: data
            }, process.env.JWT_SECRET);
        }
        catch (e) {

            if (isDevOrTest()) {
                console.error(e);
            }
        }
    },

    /**
     * Decodes an incoming jwt token.
     * @param token
     */
    decodeJwtToken: function (token) {

        try {
            let verifiedJwt = jwt.verify(token, process.env.JWT_SECRET);
            return JSON.parse(verifiedJwt.data);
        }
        catch (e) {

            if (isDevOrTest()) {
                console.error(e);
            }
        }
    },

    getStoredJwt: function () {
    }
};