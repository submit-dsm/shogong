import { commonError } from "@/constants/error";
import { JWTHelper } from "@/helpers/jwt";
import { AdminRepository } from "@/repository/admin";
import { ErrorResponse } from "@/utils/error-res";
import { comparePassword, generatePasswordHash } from "@/utils/hash";
import { AdminSignInReqBody, AdminSignUpReqBody } from "@package/api-type";

export class AdminAuthService {
  private adminRepository;
  private JWTHelper;

  constructor() {
    this.adminRepository = new AdminRepository();
    this.JWTHelper = new JWTHelper();
  }

  signup = async (userInfo: AdminSignUpReqBody) => {
    const alreadyRegisteredUser = await this.adminRepository.findByUserId(
      userInfo.id
    );

    if (alreadyRegisteredUser) {
      throw new ErrorResponse(commonError.conflict);
    }

    const hashedPassword = await generatePasswordHash(userInfo.password);

    const adminRecord = await this.adminRepository.createUser({
      ...userInfo,
      password: hashedPassword,
    });

    return adminRecord;
  };

  signIn = async (userInfo: AdminSignInReqBody) => {
    const admin = await this.adminRepository.findByUserId(userInfo.id);
    if (!admin) {
      throw new ErrorResponse(commonError.unauthorized);
    }

    const isValid = comparePassword(admin.password, userInfo.password);
    if (!isValid) {
      throw new ErrorResponse(commonError.unauthorized);
    }

    const tokens = this.JWTHelper.generateJwtTokens({ userId: admin.id });
    console.log(tokens);
    return tokens;
  };
}
