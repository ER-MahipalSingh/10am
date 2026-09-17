const dotenv = require("dotenv");
dotenv.config();

exports.env = {
  PORT: process.env.PORT,

  SECRET_KEY: process.env.SECRET_KEY,

  EXPERIE_DATE: process.env.EXPERIE_DATE,
};
