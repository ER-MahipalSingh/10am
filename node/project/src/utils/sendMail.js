const nodemailer = require("nodemailer");
const { env } = require("../config/env");

exports.sendMail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS,
      },
    });
    const mail = {
      from: env.SMTP_USER,
      to,
      subject,
      text,
    };
    await transporter.sendMail(mail);
  } catch (error) {
    console.error("Error: ", error);
  }
};
