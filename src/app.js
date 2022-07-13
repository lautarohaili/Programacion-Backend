import express from "express";
import Contenedor from "./contenedor/contenedor.js";

const app = express();
const PORT = 8080;

const FileDataNueva = new Contenedor();

//Server en escucha

const appListening = app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Servidor en ejecución");
});

app.get("/productos", async (req, res) => {
  let getAllProducts = await FileDataNueva.getAll();
  res.send(getAllProducts);
});

app.get("/productosRandom", async (req, res) => {
  let getAllProducts = await FileDataNueva.getAll();
  let id = Math.floor(Math.random() * getAllProducts.length);
  let getId = await FileDataNueva.getById(id);
  res.send(getId);
});
