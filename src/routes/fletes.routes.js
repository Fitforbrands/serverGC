import { Router } from "express";
import fletesManager from "../managers/fletesManager.js";

const router = Router();

// GET All Products

router.get("/fletes", async (req, res) => {
  const products = await fletesManager.getProducts();

  res.send(products);
});

// GET Products by ID

router.get("/flete/:pid", async (req, res) => {
  try {
    const { pid } = req.params;

    const products = await fletesManager.getProductById(pid);

    if (!products)
      return res
        .status(404)
        .json({ status: "error", msg: "Producto no encontrado" });

    res.status(200).json({ status: "ok", products });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "error 500", msg: "Error interno del servidor" });
  }
});

export default router;
