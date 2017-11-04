const Encrypt = {};
const crypto = require("crypto-js");

Encrypt.encrypt = (unencryptedData) => {
    return crypto.AES.encrypt(unencryptedData, process.env.SECRET_KEY).toString();
};

Encrypt.decrypt = (encryptedData) => {
    return crypto.AES.decrypt(encryptedData, process.env.SECRET_KEY).toString(crypt.enc.Utf8);
};

module.exports = Encrypt;