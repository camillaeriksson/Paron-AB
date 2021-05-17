const express = require("express")
const app = express()
const port = 8081
const fs = require("fs")
const cors = require('cors')

app.use(express.json())
app.use(express.static("public"))
app.use(cors());

app.get("/", (req, res) => res.send("Welcome!"))

app.get("/products", (req, res) => {
  let productData = fs.readFileSync("products.json")
  let products = JSON.parse(productData)
  res.send(products)
});

app.put("/products/:id/ingoing", (req, res) => {
  let productData = fs.readFileSync("products.json");
  let products = JSON.parse(productData);
  let updatedProduct = req.body;
  console.log(updatedProduct)
  updatedProduct.id = parseInt(req.params.id);
  const productIndex = products.findIndex(
    (product) => product.id === parseInt(req.params.id)
  );
  if (productIndex === -1) {
    res.status(404).send("The product was not found");
  } else {
    products[productIndex] = updatedProduct;
  }
  res.send();
  fs.writeFileSync("products.json", JSON.stringify(products));
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));