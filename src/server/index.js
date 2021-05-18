// Setting up the express app and port
const express = require("express")
const app = express()
const port = 8081
const fs = require("fs")
const cors = require('cors')

// Parsing incoming requests with JSON payloads, using cors (cross-origin resource sharing) 
app.use(express.json())
app.use(cors());

// Add stock to the chosen product and warehouse
app.patch("/products/:id/ingoing", (req, res) => {
  const productData = fs.readFileSync("products.json");
  let products = JSON.parse(productData);
  const quantityToAdd = req.body.quantityToAdd
  const warehouse = req.body.warehouse
  const productIndex = products.findIndex(
    (product) => product.id === parseInt(req.params.id)
  );
  // If the product id could not be found
  if (productIndex === -1) {
    res.status(404).send("The product was not found");
  } else {
    // Add the given quantity to the given warehouse stock
    products[productIndex].stock[warehouse] += quantityToAdd
  }
  res.send();
  fs.writeFileSync("products.json", JSON.stringify(products))
});

// Detract stock from the chosen product and warehouse
app.patch("/products/:id/outgoing", (req, res) => {
  const productData = fs.readFileSync("products.json");
  let products = JSON.parse(productData);
  const quantityToRemove = req.body.quantityToAdd
  const warehouse = req.body.warehouse
  const productIndex = products.findIndex(
    (product) => product.id === parseInt(req.params.id)
  );
  // If the product id could not be found
  if (productIndex === -1) {
    res.status(404).send("The product was not found");
  } else {
    // Detract the given quantity from the given warehouse stock
    products[productIndex].stock[warehouse] -= quantityToRemove
  }
  res.send();
  fs.writeFileSync("products.json", JSON.stringify(products))
});

// Get all products 
app.get("/products", (req, res) => {
  const productData = fs.readFileSync("products.json")
  const products = JSON.parse(productData)
  res.send(products)
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))