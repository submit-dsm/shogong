import { JWTHelper } from "@/helpers/jwt";
import FormRepository from "@/repository/form";
import { AdminSignUpReqBody } from "@package/api-type/admin";
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

  public async createForm(createFormParams: any) {
    return await this.formRepository.create(createFormParams);
  }
}

export default FormService;
