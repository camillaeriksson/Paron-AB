const express = require("express")
const app = express()
const port = 8081
const fs = require("fs")
const cors = require('cors')

app.use(express.json())
app.use(express.static("public"))
app.use(cors());

app.patch("/products/:id/ingoing", (req, res) => {
  console.log('jsfkja')
  const productData = fs.readFileSync("products.json");
  let products = JSON.parse(productData);
  const newQuantity = req.body.ingoingQuantity
  const warehouse = req.body.warehouse
  // const ingoingQuantity = req.body.ingoingQuantity;
  const productIndex = products.findIndex(
    (product) => product.id === parseInt(req.params.id)
  );
  if (productIndex === -1) {
    res.status(404).send("The product was not found");
  } else {
    products[productIndex].stock[warehouse] += newQuantity
  }
  res.send();
  fs.writeFileSync("products.json", JSON.stringify(products));
});

app.get("/", (req, res) => res.send("Welcome!"))

app.get("/products", (req, res) => {
  const productData = fs.readFileSync("products.json")
  const products = JSON.parse(productData)
  res.send(products)
});


app.listen(port, () => console.log(`Listening at http://localhost:${port}`));