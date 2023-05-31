import * as db from "@package/database";

class AnswerRepository {
  public async createAnswer() {
    return await db.client.studentAnswer.createMany({
      data: [
        {
          content: "",
          studentId: "",
          blockId: 1,
          formId: 1,
        },
      ],
    });
  }
}
