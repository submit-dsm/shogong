export type AdminSignUpReqBody = {
  name: string;
  password: string;
  id: string;
};

export type AdminSignInResBody = {
  access_token: string;
  refresh_token: string;
};

export type AdminSignInReqBody = {
  id: string;
  password: string;
};
