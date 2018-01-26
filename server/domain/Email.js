const MailGun = require("../config/mailgun");
const Email = {};

Email.SendVerifyRegistration = (token, email) => {
    MailGun.sendEmail(email, { text: `Your token is ${token}`});
};

module.exports = Email;