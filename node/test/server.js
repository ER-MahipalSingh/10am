const express = require("express");

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Jhon", age: 20 },
  { id: 2, name: "Alica", age: 22 },
];

app.get("/all-users", (req, res) => {
  return res
    .status(201)
    .json({ message: "Users data fetch successfully", users });
});

app.post("/add-user", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };

  users.push(newUser);
  return res.status(200).json({ message: "User data added", newUser });
});

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((userID) => userID.id === id);
  return res.status(200).json({ message: "User data fetch", user });
});

app.patch("/update/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((userId) => userId.id === id);
  user.name = req.body.name;
  return res.status(201).json({ message: "User data updates", user });
});

app.listen(5000, () => {
  console.log("Server is working...");
});
