import fs from "fs";

const path = "./src/managers/data/fletes.json";

let products = [];

// Leer products
const getProducts = async () => {
  try {
    const fileJson = await fs.promises.readFile(path, "utf-8"); // leyendo el archivo JSON
    const parseFile = JSON.parse(fileJson);
    products = parseFile || [];

    return products;
  } catch (error) {
    console.log(`${error}`);
  }
};

// Leer un product por id

const getProductById = async (id) => {
  try {
    await getProducts();

    const product = products.find((p) => p.id === id);

    return product;
  } catch (error) {
    console.log(`${error}`);
  }
};

export default {
  getProducts,
  getProductById,
};
