import { commonError } from "@/constants/error";
import { JWTHelper } from "@/helpers/jwt";
import { ErrorResponse } from "@/utils/error-res";
import { getAccessToken } from "@/utils/jwt";
import { NextFunction, Request, Response } from "express";
import { FormService } from "./service";
import { GetFormListResponse } from "../../../../../../../packages/api-type";

export const handleGetApplyForm = async (
  req: Request,
  res: Response,
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
  res: Response,
  next: NextFunction
) => {
  try {
    const formService = new FormService();
    const id = +req.params.id;
    if (isNaN(id)) throw new ErrorResponse(commonError.badRequest);
    const formDetail = await formService.getFormDetail(id);
    if (!formDetail) throw new ErrorResponse(commonError.notFound);
    res.send(formDetail);
  } catch (e) {
    next(e);
  }
};

export const handleSubmitForm = (
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
