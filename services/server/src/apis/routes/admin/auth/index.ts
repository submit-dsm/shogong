import { Router } from "express";
import { signIn, signUp } from "./controller";

export const auth = Router();

auth.post("/sign-up", signUp);
auth.post("/sign-in", signIn);
