import request from "../../";
import { InitialStateType } from "@/util/auth";
export const signup = (data: InitialStateType & { name: string }) => {
  return request.post("/auth/sign-up", data);
};
