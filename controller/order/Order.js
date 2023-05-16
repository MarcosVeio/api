import { Router } from "express";
import { ListOfOrders } from "../../services/Order.js";
import { Order } from "../../services/OrderType.js";

const orders = new ListOfOrders();
const route = Router();

route.get("/orders", (req, res) => {
  return res.json(orders.listOrders);
});

route.post("/orders", (req, res) => {
  const newOrder = new Order(req.body.listProducts);
  orders.addOrder(newOrder);
  return res.json(orders.listOrders);
});

route.post("/order", (req, res) => {
  const idProduct = req.query.idProduct;
  const idOrder = req.query.idOrder;

  return res.json(orders.addProductInOrder(idProduct, idOrder));
});

route.delete("/productInOrder", (req, res) => {
  const idProduct = req.query.idProduct;
  const idOrder = req.query.idOrder;

  return res.json(orders.removeProductInOrder(idProduct, idOrder));
});

route.delete("/order/:id", (req, res) => {
  return res.json(orders.removeOrder(req.params.id));
});

export { route };
