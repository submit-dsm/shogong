import { config } from "@/config";
import jwt, { Algorithm, VerifyErrors } from "jsonwebtoken";

interface OwnJwtPayload {
  userId: string;
}

export class JWTHelper {
  private algorithm: Algorithm;

  private secret: string;

  private xSecret: string;

  private accessExpiresInSeconds: number;

  private refreshExpiresInSeconds: number;

  constructor() {
    this.algorithm = config.jwt.algorithm;
    this.secret = config.jwt.secret;
    this.accessExpiresInSeconds = config.jwt.expire.access * 3600;
    this.refreshExpiresInSeconds = config.jwt.expire.refresh * 3600;
    this.xSecret = config.jwt.xSecret;
  }

  generateAccessToken({ userId }: OwnJwtPayload) {
    const jwtOptions = {
      algorithm: this.algorithm,
      expiresIn: this.accessExpiresInSeconds,
      subject: "ACCESS_TOKEN",
    };

    return jwt.sign({ userId }, this.secret, jwtOptions);
  }

  generateRefreshToken({ userId }: OwnJwtPayload) {
    const jwtOptions = {
      algorithm: this.algorithm,
      expiresIn: this.refreshExpiresInSeconds,
      subject: "REFRESH_TOKEN",
    };

    return jwt.sign({ userId }, this.secret, jwtOptions);
  }

  generateJwtTokens(payload: OwnJwtPayload): {
    access_token: string;
    refresh_token: string;
  } {
    const access_token = this.generateAccessToken(payload);
    const refresh_token = this.generateRefreshToken(payload);

    return { access_token, refresh_token };
  }

  decodeJwtToken(token: string, subject?: string) {
    const decodedToken = jwt.verify(token, this.secret, {
      algorithms: [this.algorithm],
      subject,
    });
    return decodedToken as unknown as Record<
      "userId" | "iat" | "exp" | "sub",
      string
    >;
  }

  decodeXJwtToken(xToken: string, subject?: string) {
    const decodedXToken = jwt.verify(xToken, this.xSecret, {
      algorithms: [this.algorithm],
      subject,
    });
    return decodedXToken as unknown as Record<
      "sub" | "role" | "exp" | "type",
      string
    > & { authorities: string[] };
  }

  decodeXAccessToken(xToken: string) {
    return this.decodeXJwtToken(xToken, "ACCESS_TOKEN");
  }

  decodeAccessToken(token: string) {
    return this.decodeJwtToken(token, "ACCESS_TOKEN") as OwnJwtPayload;
  }

  decodeRefreshToken(token: string) {
    return this.decodeJwtToken(token, "REFRESH_TOKEN");
  }

  checkTokenExpiration(
    token: string,
    type: "xquare" | "submit" = "submit"
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      jwt.verify(
        token,
        type === "submit" ? this.secret : this.xSecret,
        (err: VerifyErrors | null) => {
          if (err) {
            if (err.name === "TokenExpiredError") resolve(true);
            else reject(err);
          }
          resolve(false);
        }
      );
    });
  }
}
