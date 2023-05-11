import { Router } from "express";
import { ListOfProducts } from "../../services/Product.js";
import { Item } from "../../services/Item.js";

const products = new ListOfProducts();
const route = Router();

route.get("/products", (req, res) => {
  return res.json(products.listProduct);
});

route.post("/products", (req, res) => {
  for (const { category, price, description } of req.body) {
    const newProduct = new Item(category, description, price);
    products.addProduct(newProduct);
  }
  return res.json(products.listProduct);
});

route.delete("/product/:id", (req, res) => {
  products.deleteProduct(req.params.id);
  return res.json(res.status);
});

export { route };
