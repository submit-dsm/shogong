import { BlockType, blockType } from "./blockType";

export interface AnswerParams extends Record<BlockType, unknown> {
  [blockType.CHECKBOX]: CheckboxAnswerParams;
  [blockType.LONG_ANSWER]: LongAnswerParams;
  [blockType.RADIO]: RadioAnswerParams;
  [blockType.SHORT_ANSWER]: ShortAnswerParams;
}

type ShortAnswerParams = {
  answer: string;
};

type LongAnswerParams = {
  answer: string;
};

type RadioAnswerParams = {
  selectItem: string;
};

type CheckboxAnswerParams = {
  selectItems: string[];
};
