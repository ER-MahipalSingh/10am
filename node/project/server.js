const express = require("express");
const dotenv = require("dotenv");
const { connectDatabase } = require("./src/db/db");

const userRoutes = require("./src/routes/userRoutes");

dotenv.config();

const app = express();

app.use(express.json());
connectDatabase();

app.use("/api/v1/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is working: ${process.env.PORT}`);
});
