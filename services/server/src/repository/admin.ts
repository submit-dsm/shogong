import { PrismaClient } from "prisma";
import { AdminSignUpReqBody } from "@package/api-type";

const prisma = new PrismaClient();

export class AdminRepository {
  findByUserId = async (id: string) => {
    return await prisma.admin.findFirst({ where: { id } });
  };
  createUser = async (userInfo: AdminSignUpReqBody) => {
    await prisma.admin.create({ data: userInfo });
  };
}
