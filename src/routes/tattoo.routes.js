import { Router } from "express";
import tattooManager from "../managers/tattooManager.js";

const router = Router();

// GET All Products

router.get("/orders", async (req, res) => {
  const orders = await tattooManager.getOrders();

  res.send(orders);
});

// GET Order by ID probar servicio en postman

router.get("/order/:oid", async (req, res) => {
  try {
    const { oid } = req.params;
    console.log(oid);

    const order = await tattooManager.getOrderById(oid);

    if (!order)
      return res
        .status(404)
        .json({ status: "error", msg: "Orden no encontrada" });

    res.status(200).json({ status: "ok", order });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "error 500", msg: "Error interno del servidor" });
  }
});

// ADD Order

router.post("/order", async (req, res) => {
  try {
    const body = req.body;
    const order = await tattooManager.addOrder(body);

    res.status(201).json({ status: "ok", order });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "error", msg: "Error interno del servidor" });
  }
});

export default router;
