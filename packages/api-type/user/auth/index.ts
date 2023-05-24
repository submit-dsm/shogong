export type UserSignInReqBody = {
  account_id: string;
  password: string;
  device_token: string;
};

export type UserSignInResBody = {
  access_token: string;
  refresh_token: string;
  expire_at: string;
  role: string;
};
