const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => res.send("Welcome!"));

app.get("/products", (req, res) => {
  let userData = fs.readFileSync("users.json");
  let users = JSON.parse(userData);
  res.send(users);
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));