import * as db from "@package/database";
import { AdminSignUpReqBody } from "@package/api-type";

export class AdminRepository {
  findByUserId = async (id: number) => {
    return await db.client.admin.findFirst({ where: { id } });
  };
  createUser = async (userInfo: AdminSignUpReqBody) => {
    await db.client.admin.create({ data: userInfo });
  };
}
