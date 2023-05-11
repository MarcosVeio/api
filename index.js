import express from "express";
import { route as productRoute } from "./controller/product/Product.js";

const app = express();
const port = 8081;

app.use(express.json());

app.use(productRoute);

try {
  app.listen(port, () => {
    console.log(`Servidor rondando na porta ${port}`);
  });
} catch (error) {
  console.log(`Erro ocorrido: ${error.message}`);
}
