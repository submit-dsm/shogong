import { AdminAuthService } from "@/service/admin/auth";
import { AdminSignInReqBody, AdminSignUpReqBody } from "@package/api-type";
import { NextFunction, Request, Response } from "express";

export const signIn = (
  req: Request<{}, {}, AdminSignInReqBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userAuthInsatnce = new AdminAuthService();
    userAuthInsatnce.signIn(req.body);
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
    const userAuthInsatnce = new AdminAuthService();
    const data = await userAuthInsatnce.signup(req.body);
    return res.status(201).json({});
  } catch (e) {
    next(e);
  }
};
