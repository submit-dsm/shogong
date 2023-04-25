import { Router } from "express";
import test from "./routes/test.route";
const router = Router();

router.use("/test", test);

export default router;
