import { AnswerParams } from "./answer";
import { BlockType } from "./blockType";
import { QuestionParams } from "./question";

export type Block = {
  id: string;
  type: BlockType;
  question: string;
  isEssential?: boolean;
  questionParams?: string[];
  answerParams: AnswerParams[BlockType];
};
