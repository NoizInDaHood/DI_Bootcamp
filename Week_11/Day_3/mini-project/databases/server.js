import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.js";
import path from "path";

const app = express();
app.use(cors());
/** body-parser */
app.use(express.json()); // json
// app.use(express.urlencoded()) // form data

app.use("/", express.static(path.resolve() + "/public"));

const PORT = 3001;

app.listen(PORT, () => console.log(`run on ${PORT}`));

app.use("/api/products", productsRouter);
