import { WithId } from "../../common/utils/withId";
import { Block } from "../../common/block";
import * as db from "@package/database";

/**
 * 유저에게 할당된 Form 리스트를 미리보기 위한 데이터 입니다. 다음 param은 formList내부 객체의 타입 입니다.
 * @param id 폼 아이디 입니다.
 * @param isUnknownForm 익명 폼인지 아닌지를 나타내줍니다.
 * @param title 폼 제목 입니다.
 * @param authorName 폼 작성자 입니다.
 * @param studentTag 참여 학생 집합을 나타내줍니다.
 * @param startTime 시작시간입니다.
 * @param endTime 종료시간입니다.
 */
export type GetAssignFormsResBody = {
  formList: (Omit<db.Form, "description" | "authorId"> & {
    authorName: string;
  })[];
};

export type GetFormDetailResBody = Omit<db.Form, "authorId"> & {
  authorName: string;
} & {
  blocks: Omit<db.Block, "formId">[];
};

export type CreateAnswerReqBody = {
  answers: Pick<db.StudentAnswer, "blockId" | "content">[];
};
