import { getAllProducts, createNewProduct } from "../models/products.js";

export const getProducts = async (req, res) => {
  try {
    const results = await getAllProducts();
    res.json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "no products found" });
  }
};

export const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const results = await createNewProduct(name, price)
    res.status(201).json(results.rows)
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "something went wrong" });
  }
};
