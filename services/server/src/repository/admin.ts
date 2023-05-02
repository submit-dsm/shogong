import { PrismaClient } from "@prisma";

const prisma = new PrismaClient();

export class AdminRepository {
  findByUserId = async (id: string) => {
    return await prisma.admin.findFirst({ where: { id } });
  };
  createUser = async (userInfo: AdminSign) => {
    await prisma.admin.create({ data: userInfo });
  };
}
