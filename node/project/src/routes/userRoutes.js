const express = require("express");
const {
  register,
  login,
  getUser,
  updateUser,
  forgotPassword,
  verifyOTPAndResetPassword,
} = require("../controller/userController");
const { isAuth } = require("../middleware/isAuth");
const upload = require("../config/cloudineary");

const router = express.Router();

router.post("/register", upload.single("avatar"), register);
router.post("/login", login);
router.get("/me", isAuth, getUser);
router.patch("/update", isAuth, updateUser);
router.post("/send-otp", forgotPassword);
router.post("/verify-otp", verifyOTPAndResetPassword);

module.exports = router;
