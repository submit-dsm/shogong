import { commonError } from "@/constants/error";
import { JWTHelper } from "@/helpers/jwt";
import { AdminRepository } from "@/repository/admin";
import { ErrorResponse } from "@/utils/error-res";
import { comparePassword, generatePasswordHash } from "@/utils/hash";
import { SignInReq, SignUpReq } from "@/apis/routes/user/auth/controller";

export class AdminAuthService {
  private adminRepository;
  private JWTHelper;

  constructor() {
    this.adminRepository = new AdminRepository();
    this.JWTHelper = new JWTHelper();
  }

  signup = async (userInfo: SignUpReq) => {
    const alreadyRegisteredUser = await this.adminRepository.findByUserId(
      userInfo.email
    );

    if (alreadyRegisteredUser) {
      throw new ErrorResponse(commonError.conflict);
    }

    const hashedPassword = await generatePasswordHash(userInfo.password);

    const adminRecord = await this.adminRepository.createUser({
      ...userInfo,
      password: hashedPassword,
    });

    return userRecord;
  };

  signIn = async (userInfo: SignInReq) => {
    const user = await this.adminRepository.findByUserId(userInfo.email);
    if (!user) {
      throw new ErrorResponse(commonError.unauthorized);
    }
    const isValid = comparePassword(user.password, userInfo.password);
    if (!isValid) {
      throw new ErrorResponse(commonError.unauthorized);
    }

    const tokens = this.JWTHelper.generateJwtTokens({ userId: user.id });
    return tokens;
  };
}
