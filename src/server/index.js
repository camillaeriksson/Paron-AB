const express = require("express");
const app = express();
const port = 8081;
const fs = require("fs");
const cors = require('cors')

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => res.send("Welcome!"));

app.get("/products", (req, res) => {
  let userData = fs.readFileSync("products.json");
  let users = JSON.parse(userData);
  res.send(users);
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));