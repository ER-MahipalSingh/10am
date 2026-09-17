const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(401).json({ message: "All fields are required" });
    }

    const extUser = await User.findOne({ email }).select("-password");
    if (extUser) {
      return res.status(401).json({ message: "User already registerd" });
    }

    const hasPass = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hasPass,
    });

    return res.status(201).json({ message: "Registeration done", newUser });
  } catch (error) {
    console.log("Error: ", error);
    return res
      .status(500)
      .json({ message: "Somthing went wrong on registeration" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fileds are required" });
    }

    const isUser = await User.findOne({ email }).select("+password");
    if (!isUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatchPass = await bcrypt.compare(password, isUser.password);
    if (!isMatchPass) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = generateToken(isUser.id, res);
    return res.status(201).json({ message: "Login done", isUser, token });
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ message: "Login server error" });
  }
};

exports.getUser = async (req, res) => {
  try {
    // const id  = req.user.id
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not auth. " });
    }
    return res.status(200).json({ message: "User data fetched", user });
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ message: "user load failed" });
  }
};
