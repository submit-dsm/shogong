import * as db from "@package/database";
export type AdminSignUpReqBody = db.Admin;

export type AdminSignInResBody = {
  access_token: string;
  refresh_token: string;
};

export type AdminSignInReqBody = Omit<db.Admin, "name">;
