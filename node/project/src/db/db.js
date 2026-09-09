const mongoose = require("mongoose");

exports.connectDatabase = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("Database connected"))
      .catch(() => console.log("Error to connect DB"));
  } catch (error) {
    console.error("Error: ", error);
  }
};
