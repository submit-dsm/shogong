import { validateXToken } from "@/apis/middlewares/validate-x-token";
import { Router } from "express";
import { handleGetApplyForm, handleGetFormDetail } from "./controller";

export const form = Router();

form.get("/", validateXToken, handleGetApplyForm);
form.post("/:id", validateXToken);
form.get("/detail/:id", validateXToken, handleGetFormDetail);
