import express from "express";

import { getProducts } from "./get.js";
import { createProduct } from "./post.js";
import { updateProduct } from "./put.js";
import { deleteProduct } from "./delete.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
