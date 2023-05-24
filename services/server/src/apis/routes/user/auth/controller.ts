import { instance } from "@/utils/axios";
import { UserSignInReqBody, UserSignInResBody } from "@package/api-type";
export class UserAuthController {
  async signIn(params: UserSignInReqBody) {
    const response = await instance.post<UserSignInResBody>(
      "/users/login",
      params
    );
    return response.data;
  }
}
