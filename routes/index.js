import expressRouter from "express";
import registerRouter from "./registerRouter.js";

const router = expressRouter.Router();

router.use("/user", registerRouter);

export default router;
