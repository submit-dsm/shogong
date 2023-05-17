import { Block } from "../../common/block";

export type CreateFormRequestDto = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isUnknown: boolean;
  studentTag: string;
  blocks: Block[];
};

export type UpdateFormRequestDto = Partial<CreateFormRequestDto>;

export type EnableFormRequestDto = { enable: boolean };
