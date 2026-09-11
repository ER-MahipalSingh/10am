const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is require"],
    },
    email: {
      type: String,
      required: [true, "Email is require"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Passowrd is requirer"],
    },
  },
  { timestemp: true },
);

module.exports = mongoose.model("User", userSchema);
