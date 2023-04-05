import { Router } from "express";
import userRouter from "../routes/userRouter.js";
import typeRouter from "../routes/typeRouter.js";
import brandRouter from "../routes/brandRouter.js";
import deviceRouter from "../routes/deviceRouter.js";
import checkRoleMiddleware from "../middleware/checkRoleMiddleware.js";
const router = new Router();

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", checkRoleMiddleware("ADMIN"), brandRouter);
router.use("/device", checkRoleMiddleware("ADMIN"), deviceRouter);

export default router;
