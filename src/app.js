import express from "express";
import bodyParse from "body-parser";
import cors from "cors";
import fletesRouter from "./routes/fletes.routes.js";
import tattooRouter from "./routes/tattoo.routes.js";

const app = express();

app.use(cors("https://fletesjs.netlify.app/"));

// Middleware para permitir CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Permitir solicitudes desde localhost:8080
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use("/api", fletesRouter);
app.use("/api", tattooRouter);

// listen port

const PORT = process.env.PORT || 3977;

app.listen(PORT, () => {
  console.log("puerto conectado: 3977");
});

// const whitelist = [
//   "https://fletesjs.netlify.app/",
//   "https://fletesjs.netlify.app/paginas/zonastodas",
// ];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
// // console.log(corsOptions);
