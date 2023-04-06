import { Router } from "express";
import productController from "../controllers/productController.js";
const router = new Router();

router.post("/", productController.create);
router.get("/", productController.getAll);
router.get("/:id", productController.getOne);

export default router;
