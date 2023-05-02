import * as db from "@prisma";
import { v4 } from "uuid";

type FormWithoutId = Omit<db.Form, "id">;

class FormRepository {
  public async findAll() {
    return await db.client.form.findMany();
  }

  public async findOne(formId: string) {
    return await db.client.form.findUnique({
      where: {
        id: formId,
      },
    });
  }

  public async create(formParam: FormWithoutId) {
    const randomFormId = v4();
    return await db.client.form.create({
      data: { id: randomFormId, ...formParam },
    });
  }

  public async update(formId: string, formParam: Partial<FormWithoutId>) {
    return await db.client.form.update({
      where: { id: formId },
      data: formParam,
    });
  }

  public async delete(formId: string) {
    return await db.client.form.delete({
      where: {
        id: formId,
      },
    });
  }
}

export default FormRepository;
