import { Router } from "express";
import { form } from "./form";

export const user = Router();

user.use("/form", form);
