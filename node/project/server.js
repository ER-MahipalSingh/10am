const express = require("express");
const dotenv = require("dotenv");
const { connectDatabase } = require("./src/db/db");

dotenv.config();

const app = express();

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working: ${process.env.PORT}`);
});
