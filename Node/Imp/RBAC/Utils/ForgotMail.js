const nodemailer = require("nodemailer");
require("dotenv").config();

const ForgotPasswordMail = async (token, email) => {
  const Forgor_Password_Link = `http://localhost:5173/setpassword?token=${token}&email=${email}`;
  const Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  await Transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Reset Your Password",
    html: `
        <p>You Requested to reset your password.</p>
        <p>Click <a href="${Forgor_Password_Link}">here</a> to reset it. This link expires in 2 minutes.</p>
      `,
  });
};

module.exports = ForgotPasswordMail;
