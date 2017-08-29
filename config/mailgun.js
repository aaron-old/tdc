const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_PRIV_KEY,
  domain: process.env.MAILGUN_DOMAIN
});

/**
 *
 * @param recipient
 * @param message
 */
exports.sendEmail = (recipient, message) => {
  const data = {
    from: `Tdoggs Corner - Boxing Blog`,
    to: recipient,
    subject: message.subject,
    text: message.text
  };

  mailgun.messages().send(data, (error, body) => {
    if (process.env !== "production") {
      console.error(error);
      console.error(body);
    }
  });

};

/**
 *
 * @param sender
 * @param message
 */
exports.contactForm = (sender, message) => {
  const data = {
    from: sender,
    to: "mustarddevelopment@gmail.com",
    subject: message.subject,
    text: message.text
  };

  mailgun.messages().send(data, (error, body) => {
    if (process.env !== "production") {
      console.error(error);
      console.error(body);
    }
  });
};

