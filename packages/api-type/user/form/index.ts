import { WithId } from "../../common/utils/withId";
import { Block } from "../../common/block";

export type GetFormListResponse = WithId<{
  title: string;
  startDate: string;
  endDate: string;
  isUnknown: boolean;
  studentTag: string;
  author: string;
}>;

export type GetFormDetailResponse = {
  title: string;
  blocks: Block[];
};

export type PostFormWriteRequest = {
  formId: string;
  blocks: [{ id: string }];
};
