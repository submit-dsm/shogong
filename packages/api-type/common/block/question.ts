import { BlockType, blockType } from "./blockType";

export interface QuestionParams extends Record<BlockType, unknown> {
  [blockType.CHECKBOX]: CheckboxQuestionParams;
  [blockType.RADIO]: RadioQuestionParams;
}

type RadioQuestionParams = {
  items: string[];
};

type CheckboxQuestionParams = {
  items: string[];
};
