import * as db from "@package/database"

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
    return await db.client.form.findMany({
      where: {
        students: {
          some: {
            studentId: studentId,
          },
        },
      },
      include: {
        students: true,
      },
    });
  }
  public async createForm(formId: number, answer: any[]) {
    return await db.client.form.create({
      data: {
        description: "",
        endTime: "",
        isUnknownForm: false,
        studentTag: "",
        title: "",
        authorId: 1,
        blocks:{
          createMany:{
            data:[{}]
          }
        }
        students: {
          createMany: {
            data: [{ studentId: "" }],
          },
        },
      },
    });
  }
  public async createAnswer (formId: number,answer: any[]){
    return await db.client.studentAnswer.create({
      data:{
        studentId:"",
        content:"",
        blockId: 1,
        formId:1
      },
      include:{
        block:true,
        form:true
      }
    })
  }
}

export default FormRepository;
