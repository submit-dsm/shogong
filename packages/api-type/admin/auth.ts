export interface AdminSignUpReqBody {
  name: string;
  password: string;
  id: string;
}

export interface AdminSignInResBody {
  access_token: string;
  refresh_token: string;
}

export interface AdminSignInReqBody {
  id: string;
  password: string;
}
