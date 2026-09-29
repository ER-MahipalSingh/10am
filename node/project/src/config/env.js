const dotenv = require("dotenv");
dotenv.config();

exports.env = {
  PORT: process.env.PORT,

  SECRET_KEY: process.env.SECRET_KEY,

  EXPERIE_DATE: process.env.EXPERIE_DATE,

  JWT_EXPERIES: process.env.JWT_EXPERIES,

  SMTP_USER: process.env.SMTP_USER,

  SMTP_PASS: process.env.SMTP_PASS,
};
