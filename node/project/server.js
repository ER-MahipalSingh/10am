const express = require("express");

const { env } = require("./src/config/env");
const { connectDatabase } = require("./src/db/db");

const userRoutes = require("./src/routes/userRoutes");

const app = express();

app.use(express.json());

connectDatabase();

app.use("/api/v1/user", userRoutes);

app.listen(env.PORT, () => {
  console.log(`Server is working: ${env.PORT}`);
});
