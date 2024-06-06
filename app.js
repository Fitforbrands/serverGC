import express from "express";
import { readFile } from "fs/promises"; // para importar un archivo JSON

const fletes = await readFile("./fletes.json", "utf-8"); // leyendo el archivo JSON

const app = express();

app.get("/saludo", (req, res) => {
  res.send("Bienvenido a nuestro sitio");
});

app.get("/fletes", (req, res) => {
  res.send(fletes);
});

app.listen(8081, () => {
  console.log("puerto conectado: 8080");
});
