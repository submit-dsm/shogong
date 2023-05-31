import { getAccessToken } from "@/utils/jwt";
import { NextFunction, Request, Response } from "express";
import FormService from "./service";
import { JWTHelper } from "@/helpers/jwt";
import axios from "axios";
import { instance } from "@/utils/axios";

export const handleGetForm = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const formService = new FormService();
    const forms = await formService.getAllForms();
    return res.send({ forms: forms });
  } catch (e) {
    next(e);
  }
};

export const handleCreateForm = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const formService = new FormService();
    formService.createForm(req.body);
    return res.status(201).json({});
  } catch (e) {
    next(e);
  }
};

export const handleCloseForm = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (e) {}
};

export const handleFormDelete = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (e) {}
};

export const handleGetAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await instance.get("/users/role?roleName=STU");
    res.status(200).send(response.data);
  } catch (e) {
    next(e);
  }
};
