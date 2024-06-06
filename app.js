import express from "express";
// const bodyParse = require("body-parser");

import bodyParse from "body-parser";
import { readFile } from "fs/promises"; // para importar un archivo JSON
const app = express();
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

const PORT = process.env.PORT || 3977;
const fletes = await readFile("./fletes.json", "utf-8"); // leyendo el archivo JSON

app.get("/saludo", (req, res) => {
  res.send("Bienvenido a nuestro sitio");
});

app.get("/fletes", (req, res) => {
  res.send(fletes);
});

app.listen(PORT, () => {
  console.log("puerto conectado: 8080");
});
