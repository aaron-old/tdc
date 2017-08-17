const jwt = require('jsonwebtoken');
const crypto = require('crypto-js');
const isDevOrTest = require('../helpers').isDevOrTest;

/**
 * Encrypts the incoming data regarding the user.
 * @param unencryptedData
 */
let encryptData = (unencryptedData) => {
  return crypto.AES.encrypt(unencryptedData, process.env.SECRET_KEY).toString();
};

/**
 * Decrypts the incoming encrypted data.
 * @param encryptedData
 */
let decryptData = (encryptedData) => {
  return crypto.AES.decrypt(encryptedData, process.env.SECRET_KEY).toString(crypto.enc.Utf8);
};

module.exports = {

  /**
   * Generates a jwt token for a request.
   * @param data
   * @returns {*}
   */
  generateToken: (data) => {

    try {
      return jwt.sign(encryptData(data), process.env.JWT_SECRET);
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
      return JSON.parse(decryptData(verifiedJwt));
    }
    catch (e) {

      if(isDevOrTest()) {
        console.error(e);
      }
    }
  },

  getStoredJwt: function () {}
};