const jwt = require("jsonwebtoken");
const { env } = require("../config/env");

exports.generateToken = (id, res) => {
  const token = jwt.sign({ id }, env.SECRET_KEY, {
    expiresIn: process.env.EXPERIE_DATE,
  });
  const options = {
    expires: new Date(Date.now() + env.EXPERIE_DATE * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: false,
  };

  res.cookie("token", token, options);
  return token;
};
