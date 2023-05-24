import FormRepository from "@/repository/form";

export class FormService {
  private formRepository: FormRepository;
  constructor() {
    this.formRepository = new FormRepository();
  }

  async getApplyForms(studentId: string) {
    const applyForms = await this.formRepository.findByStudentId(studentId);
    return applyForms;
  }

  async getFormDetail(formId: number) {
    const formDetail = await this.formRepository.findOne(formId);
    return formDetail;
  }

  async submitForm(formId: number, answerData: any) {}
}
