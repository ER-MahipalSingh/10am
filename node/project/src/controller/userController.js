const User = require("../models/userModel");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(401).json({ message: "All fildes are required" });
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({ message: "Registeration done", newUser });
  } catch (error) {
    console.log("Error: ", error);
    return res
      .status(500)
      .json({ message: "Somthing went wrong on registeration" });
  }
};
