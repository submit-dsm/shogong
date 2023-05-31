import { commonError } from "@/constants/error";
import { JWTHelper } from "@/helpers/jwt";
import { ErrorResponse } from "@/utils/error-res";
import { getAccessToken } from "@/utils/jwt";
import { NextFunction, Request, Response } from "express";
import { FormService } from "./service";
import {
  CreateAnswerReqBody,
  GetAssignFormsResBody,
  GetFormDetailResBody,
} from "@package/api-type/user/form";

export const handleGetApplyForm = async (
  req: Request,
  res: Response<GetAssignFormsResBody>,
  next: NextFunction
): Promise<void> => {
  try {
    const jwtHelper = new JWTHelper();
    const formService = new FormService();
    const token = getAccessToken(req.headers.authorization);
    const tokenData = jwtHelper.decodeXJwtToken(token);
    const applyForms = await formService.getApplyForms(tokenData.sub);
    res.send(applyForms);
  } catch (e) {
    next(e);
  }
};

export const handleGetFormDetail = async (
  req: Request,
  res: Response<GetFormDetailResBody>,
  next: NextFunction
) => {
  try {
    const formService = new FormService();
    const formDetail = await formService.getFormDetail(req.params.id);
    res.send(formDetail);
  } catch (e) {
    next(e);
  }
};

export const handleSubmitForm = async (
  req: Request<{ id: string }, unknown, CreateAnswerReqBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtHelper = new JWTHelper();
    const formService = new FormService();
    const token = getAccessToken(req.headers.authorization);
    const tokenData = jwtHelper.decodeXJwtToken(token);

    await formService.postFormAnswer(req.params.id, tokenData.sub, req.body);
    res.status(201).send();
  } catch (e) {
    next(e);
  }
};
