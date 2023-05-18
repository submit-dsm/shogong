import { NextFunction, Request, Response } from "express";

import { commonError } from "../../constants/error";
import { ErrorResponse } from "@/utils/error-res";
import { getAccessToken } from "@/utils/jwt";
import { JWTHelper } from "@/helpers/jwt";

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const accessToken = getAccessToken(req.headers.authorization);
    // const refreshToken = getRefreshToken(req.cookies);

    if (!accessToken) {
      throw new ErrorResponse(commonError.unauthorized);
    }

    const jwtHelper = new JWTHelper();
    const isTokenExpired = await jwtHelper.checkTokenExpiration(accessToken);

    // token 만료
    if (isTokenExpired) {
      throw new ErrorResponse(commonError.unauthorized);
    }

    next();
  } catch (e) {
    next(e);
  }
};

export default validateToken;
