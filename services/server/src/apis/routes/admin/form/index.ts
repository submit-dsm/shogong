import validateToken from "@/apis/middlewares/validate-token";
import { Router } from "express";
import { handleGetForm } from "./form.controller";
export const form = Router();

form.get("/", validateToken, handleGetForm);
