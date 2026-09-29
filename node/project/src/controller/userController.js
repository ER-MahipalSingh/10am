const User = require("../models/userModel");
const OTP = require("../models/otpModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");
const { sendMail } = require("../utils/sendMail");

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
    const id = req.user.id;
    // const id = req.params.id;
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

exports.updateUser = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(404).json({ message: "All fildes are required" });
    }

    // const id = req.params.id;
    const id = req.user.id;
    const user = await User.findByIdAndUpdate(
      id,
      { name },
      { new: true, runValidators: true },
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(201).json({ message: "Data updated done", user });
  } catch (error) {
    console.error("Error: ", error);
    return res
      .status(500)
      .json({ message: "Somthing wnet wrong to update data" });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(404).json({ message: "Email required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 999999).toString();
    await OTP.findOneAndUpdate(
      { email },
      { email, otp, date: Date.now() + 10 * 24 * 1000 },
      { upsert: true },
    );

    await sendMail({
      to: email,
      subject: "OTP for password resetting",
      text: `OTP ${otp}`,
    });

    return res.status(201).json({ message: "OTP send successfully", otp });
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ message: "Semthing went wrong" });
  }
};

exports.verifyOTPAndResetPassword = async (req, res) => {};
