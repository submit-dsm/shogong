import * as db from "@prisma";

type FormWithoutId = Omit<db.Form, "id">;

class FormRepository {
  public async findAll() {
    return await db.client.form.findMany();
  }

  public async findOne(formId: number) {
    return await db.client.form.findUnique({
      where: {
        id: formId,
      },
    });
  }

  public async create(formParam: FormWithoutId, formId: number) {
    return await db.client.form.create({
      data: { id: formId, ...formParam },
    });
  }

  public async update(formId: number, formParam: Partial<FormWithoutId>) {
    return await db.client.form.update({
      where: { id: formId },
      data: formParam,
    });
  }

  public async delete(formId: number) {
    return await db.client.form.delete({
      where: {
        id: formId,
      },
    });
  }

  public async findByStudentId(studentId: string) {
    return await db.client.studentForm.findFirst({
      where: {
        studentId: studentId,
      },
    });
  }
}

export default FormRepository;
