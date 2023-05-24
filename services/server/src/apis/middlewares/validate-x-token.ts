import { commonError } from "@/constants/error";
import { JWTHelper } from "@/helpers/jwt";
import { ErrorResponse } from "@/utils/error-res";
import { getAccessToken } from "@/utils/jwt";
import { NextFunction, Request, Response } from "express";

export const validateXToken = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const accessToken = getAccessToken(req.headers.authorization);
    if (!accessToken) {
      throw new ErrorResponse(commonError.unauthorized);
    }
    const jwtHelper = new JWTHelper();
    const isTokenExpired = await jwtHelper.checkTokenExpiration(
      accessToken,
      "xquare"
    );

    if (isTokenExpired) {
      throw new ErrorResponse(commonError.unauthorized);
    }

    next();
  } catch (e) {
    next(e);
  }
};
