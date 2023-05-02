import { UserAuthService } from "@/services/user/auth";
import { NextFunction, Request, Response } from "express";

export const signIn = (
  req: Request<{}, {}, SignUpReq>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userAuthInsatnce = new UserAuthService();
    userAuthInsatnce.signIn(req.body);
  } catch (e) {
    next(e);
  }
};

export interface SignUpReq {
  email: string;
  password: string;
  name: string;
  profile?: string;
}

export interface SignInReq {
  email: string;
  password: string;
  name: string;
  profile?: string;
}

export const signUp = async (
  req: Request<{}, {}, SignUpReq>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userAuthInsatnce = new UserAuthService();
    const data = await userAuthInsatnce.signup(req.body);
    return res.status(201).json({});
  } catch (e) {
    next(e);
  }
};
