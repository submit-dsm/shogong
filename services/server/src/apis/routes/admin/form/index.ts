import validateToken from "@/apis/middlewares/validate-token";
import { Router } from "express";
import { handleCreateForm, handleGetForm } from "./controller";
export const form = Router();

form.get("/", validateToken, handleGetForm);
form.post("/", validateToken, handleCreateForm);
