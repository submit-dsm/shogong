import { Router } from "express";
import { auth } from "./auth";
// import { form } from "./form";

export const admin = Router();

admin.use("/auth", auth);
// admin.use("/form", form);
