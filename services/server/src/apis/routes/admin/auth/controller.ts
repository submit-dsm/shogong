import { AdminAuthService } from "@/apis/routes/admin/auth/service";
import {
  AdminSignInReqBody,
  AdminSignUpReqBody,
} from "@package/api-type/admin";
import { NextFunction, Request, Response } from "express";

export const signIn = async (
  req: Request<{}, {}, AdminSignInReqBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userAuthInstance = new AdminAuthService();
    const userToken = await userAuthInstance.signIn(req.body);
    return res.status(200).json(userToken);
  } catch (e) {
    next(e);
  }
};

export const signUp = async (
  req: Request<{}, {}, AdminSignUpReqBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userAuthInstance = new AdminAuthService();
    const data = await userAuthInstance.signup(req.body);
    return res.status(201).json({});
  } catch (e) {
    next(e);
  }
};
