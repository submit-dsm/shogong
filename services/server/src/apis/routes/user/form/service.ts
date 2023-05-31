import { commonError } from "@/constants/error";
import FormRepository from "@/repository/form";
import { ErrorResponse } from "@/utils/error-res";
import {
  CreateAnswerReqBody,
  GetAssignFormsResBody,
  GetFormDetailResBody,
} from "@package/api-type/user/form";

export class FormService {
  private formRepository: FormRepository;
  constructor() {
    this.formRepository = new FormRepository();
  }

  async getApplyForms(studentId: string): Promise<GetAssignFormsResBody> {
    const applyForms = await this.formRepository.findByStudentId(studentId);
    return {
      formList: applyForms.map(({ author, ...form }) => ({
        ...form,
        authorName: author.name,
      })),
    };
  }

  async getFormDetail(formId: string): Promise<GetFormDetailResBody> {
    const id = +formId;
    if (isNaN(id)) throw new ErrorResponse(commonError.badRequest);

    const formDetail = await this.formRepository.findDetail(id);
    if (!formDetail) throw new ErrorResponse(commonError.notFound);

    const { author, ...formDetailRest } = formDetail;

    return { ...formDetailRest, authorName: author.name };
  }

  async postFormAnswer(
    formId: string,
    studentId: string | null,
    answerData: CreateAnswerReqBody
  ) {
    const parseFormId = +formId;
    if (isNaN(parseFormId)) throw new ErrorResponse(commonError.badRequest);
    if (!studentId) throw new ErrorResponse(commonError.badRequest);
    const parseAnswerData = answerData.answers.map((answer) => ({
      ...answer,
      studentId,
      formId: parseFormId,
    }));

    await this.formRepository.createAnswer(parseAnswerData);
  }
}
