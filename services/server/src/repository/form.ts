import * as db from "@package/database";
import { GetAssignFormsResBody } from "@package/api-type";

type FormWithoutId = Omit<db.Form, "id">;

class FormRepository {
  public async findAll() {
    return await db.client.form.findMany();
  }

  public async findDetail(formId: number) {
    return await db.client.form.findUnique({
      where: {
        id: formId,
      },
      select: {
        blocks: {
          select: {
            blockJsonString: true,
            question: true,
            id: true,
            type: true,
          },
        },
        author: {
          select: {
            name: true,
          },
        },
        description: true,
        endTime: true,
        id: true,
        isUnknownForm: true,
        studentTag: true,
        title: true,
        startTime: true,
      },
    });
  }

  public async create(formParam: FormWithoutId) {
    return await db.client.form.create({
      data: { ...formParam },
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
    return await db.client.form.findMany({
      where: {
        students: {
          some: {
            studentId: studentId,
          },
        },
      },
      select: {
        title: true,
        studentTag: true,
        isUnknownForm: true,
        startTime: true,
        endTime: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  public async createAnswer(answerData: Omit<db.StudentAnswer, "time">[]) {
    return await db.client.studentAnswer.createMany({
      data: answerData,
    });
  }
}

export default FormRepository;
