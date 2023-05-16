import express from "express";
import { route as productRoute } from "./controller/product/Product.js";
import { route as orderRoute } from "./controller/order/Order.js";

const app = express();
const port = 8081;

app.use(express.json());

app.use(productRoute, orderRoute);

try {
  app.listen(port, () => {
    console.log(`Servidor rondando na porta ${port}`);
  });
} catch (error) {
  console.log(`Erro ocorrido: ${error.message}`);
}
