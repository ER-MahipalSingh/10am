const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { env } = require("../config/env");

exports.isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(404).json({ message: "User not auththicated" });
  }

  try {
    const decoade = jwt.verify(token, env.SECRET_KEY);
    req.user = await User.findById(decoade.id);
    if (!req.user) {
      return res.status(401).json("User not authroize");
    }
    next();
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ message: "auththicated failed" });
  }
};
