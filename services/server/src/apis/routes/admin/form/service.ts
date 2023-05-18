import { JWTHelper } from "@/helpers/jwt";
import FormRepository from "@/repository/form";
import {
  AdminSignUpReqBody,
  CreateFormRequestDto,
} from "@package/api-type/admin";
class FormService {
  private formRepository: FormRepository;

  constructor() {
    this.formRepository = new FormRepository();
  }

  public async getAssignForms(studentId: string) {
    return await this.formRepository.findByStudentId(studentId);
  }

  public async getAllForms() {
    return await this.formRepository.findAll();
  }

  public async createForm(createFormParams: CreateFormRequestDto) {
    const {
      blocks,
      description,
      endDate,
      isUnknown,
      startDate,
      studentTag,
      title,
    } = createFormParams;
    return await this.formRepository.create(
      {
        description,
        endDate,
        isUnknown,
        title,
        studentTag,
        startDate,
        authorId: "",
        isComplete: true,
      },
      ""
    );
  }
}

export default FormService;
