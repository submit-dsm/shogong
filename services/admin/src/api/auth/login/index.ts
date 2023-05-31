import request from "@/api";
import { InitialStateType } from "@/util/auth";

export const login = (state: InitialStateType) => {
  const data: Promise<{ access_token: string; refresh_token: string }> =
    request.post("/auth/sign-in", state);
  return data;
};
