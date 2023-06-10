const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./products");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send(products);
});
app.get("/Products", (req, res) => {
  res.send(products);
});
const port = process.env.PORT || 5000;
app.listen(port, console.log(`http://localhost:${port}`));