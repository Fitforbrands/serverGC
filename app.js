import express from "express";
import bodyParse from "body-parser";
import { readFile } from "fs/promises"; // para importar un archivo JSON
import cors from "cors";

const app = express();

const whitelist = [
  "https://fletesjs.netlify.app/",
  "https://fletesjs.netlify.app/paginas/zonastodas",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
console.log(corsOptions);

app.use(cors(corsOptions));
// app.use(cors());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

const PORT = process.env.PORT || 3977;
const fletes = await readFile("./fletes.json", "utf-8"); // leyendo el archivo JSON
const listado = JSON.parse(fletes);

app.get("/saludo", (req, res) => {
  res.send("Bienvenido a nuestro sitio");
});

app.get("/fletes", (req, res) => {
  res.send(listado);
});

app.listen(PORT, () => {
  console.log("puerto conectado: 8080");
});
