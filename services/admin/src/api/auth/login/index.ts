import request from "@/api";
import { InitialStateType } from "@/util/auth";

export const login = (state: InitialStateType) => {
  const data: Promise<{ accessToken: string; refreshToken: string }> =
    request.post("/login", state);
  return data;
};
