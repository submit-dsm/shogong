import dotenv from "dotenv";
import { Algorithm } from "jsonwebtoken";

const envFound = dotenv.config();

if (!envFound) {
  throw new Error(".env not found");
}

const { env } = process;

interface ConfigType {
  port: string;
  jwt: {
    algorithm: Algorithm;
    secret: string;
    expire: {
      access: number;
      refresh: number;
    };
  };
}

export const config: ConfigType = {
  port: env.PORT || "8080",
  jwt: {
    algorithm: (env.JWT_ALGORITHM as Algorithm) || "HS256",
    secret: env.JWT_SECRET || "",
    expire: {
      access: parseFloat(env.JWT_EXPIRE_ACCESS || "0"),
      refresh: parseFloat(env.JWT_EXPIRE_REFRESH || "0"),
    },
  },
};
