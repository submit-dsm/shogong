import { getAccessToken } from "@/utils/jwt";
import { NextFunction, Request, Response } from "express";
import FormService from "../../../service/form";
import { JWTHelper } from "@/helpers/jwt";
import {
  CreateFormRequestDto,
  EnableFormRequestDto,
} from "@package/api-type/admin";
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
