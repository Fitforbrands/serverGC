import fs from "fs";
import { v4 as uuid } from "uuid";

const pathOrders = "./src/managers/data/tattoo/tattooOrders.json";

let orders = [];

// Leer Ordenes
const getOrders = async () => {
  try {
    const fileJson = await fs.promises.readFile(pathOrders, "utf-8"); // leyendo el archivo JSON
    const parseFile = JSON.parse(fileJson);
    orders = parseFile || [];

    return orders;
  } catch (error) {
    console.log(`${error}`);
  }
};

// Leer una order por id

const getOrderById = async (id) => {
  try {
    await getOrders();

    const order = orders.find((o) => o.order.orderId === id);
    console.log(`orders ${orders}`);

    return orders;
  } catch (error) {
    console.log(`${error}`);
  }
};

// ADD Products

const addOrder = async (ord) => {
  try {
    await getOrders();

    const { order, prof, client, tattooData } = ord;

    const newOrder = {
      order: {
        id: uuid(),
        order,
        prof,
        client,
        tattooData,
      },
    };

    orders.push(newOrder);

    await fs.promises.writeFile(pathOrders, JSON.stringify(orders));

    return newOrder;
  } catch (error) {
    console.log(`${error}`);
  }
};

export default {
  getOrders,
  getOrderById,
  addOrder,
};
