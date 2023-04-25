import { Application } from "express";
import router from "../apis";

export default (app: Application) => {
  app.use("/", router);
};
