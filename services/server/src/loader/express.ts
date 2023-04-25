import { Application } from "express";
import router from "../apis";
import ErrorResponse from "src/utils/error-res";
import errorHandler from "src/apis/middlewares/error";
import { commonError } from "src/constants/error";
import morgan from "morgan";
import cors from "cors";

export default (app: Application) => {
  app.use("/", router);

  cors();
  morgan("dev");

  app.get("/status", (req, res) => {
    return res.json({});
  });

  app.all("*", (_req, _res, next) => {
    next(new ErrorResponse(commonError.notFound));
  });

  app.use(errorHandler);
};
