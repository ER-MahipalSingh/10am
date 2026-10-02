const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    otp: {
      type: String,
      required: [true, "OTP is required"],
    },
    date: {
      type: Date,
    },
    
  },
  { timestamps: true },
);

module.exports = mongoose.model("OTP", otpSchema);
