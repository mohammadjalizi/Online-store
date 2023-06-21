const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./Products");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send(products);
});
app.get("/Products", (req, res) => {
  res.send(products);
});
app.get("/products/id").(req,res)=>{

const onproduct=products.find((item)=>{
return item.id==req.parmas.id;


})
res.send(onproduct)

}
const port = process.env.PORT || 5000;
app.listen(port, console.log(`http://localhost:${port}`));