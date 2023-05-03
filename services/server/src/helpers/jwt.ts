import { config } from "@/config";
import jwt, { Algorithm, VerifyErrors } from "jsonwebtoken";

interface OwnJwtPayload {
  userId: string;
}

export class JWTHelper {
  private algorithm: Algorithm;

  private secret: string;

  private accessExpiresInSeconds: number;

  private refreshExpiresInSeconds: number;

  constructor() {
    this.algorithm = config.jwt.algorithm;
    this.secret = config.jwt.secret;
    this.accessExpiresInSeconds = config.jwt.expire.access * 3600;
    this.refreshExpiresInSeconds = config.jwt.expire.refresh * 3600;
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
    return decodedToken;
  }

  decodeAccessToken(token: string) {
    return this.decodeJwtToken(token, "ACCESS_TOKEN") as OwnJwtPayload;
  }

  decodeRefreshToken(token: string) {
    return this.decodeJwtToken(token, "REFRESH_TOKEN");
  }

  checkTokenExpiration(token: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.secret, (err: VerifyErrors | null) => {
        if (err) {
          if (err.name === "TokenExpiredError") resolve(true);
          else reject(err);
        }
        resolve(false);
      });
    });
  }
}
