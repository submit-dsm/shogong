import validateToken from "@/apis/middlewares/validate-token";
import { Router } from "express";
import {
  handleCreateForm,
  handleGetAllStudent,
  handleGetForm,
} from "./controller";
export const form = Router();

form.get("/", validateToken, handleGetForm);
form.post("/", validateToken, handleCreateForm);
form.get("/student", validateToken, handleGetAllStudent);
