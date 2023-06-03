import { Dispatch } from "react";
import { BlockType, type Block } from "@package/api-type";

export type State = { index: number; blocks: Block[]; lastDate: Date };
export type Action =
  | {
      type: "CHANGE";
      block: BlockType;
    }
  | { type: "WRITE"; question: string }
  | { type: "ADD_OPTIONS"; question: string }
  | { type: "DELETE_OPTIONS"; idx: number }
  | {
      type: "CHANGE_OPTIONS";
      idx: number;
      question: string;
    }
  | { type: "ADD" }
  | { type: "DELETE"; idx: number }
  | { type: "INDEX"; idx: number }
  | { type: "DRAG"; start: number; end: number }
  | { type: "DATE"; lastDate: Date };

export type SampleDispatch = Dispatch<Action>;
export const initialValue: Block = {
  id: "",
  type: "SHORT_ANSWER",
  question: "",
  isEssential: false,
  questionParams: [],
  answerParams: "",
};
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "WRITE":
      return {
        ...state,
        blocks: state.blocks.map((e, i) =>
          i === state.index ? { ...e, question: action.question } : e
        ),
      };
    case "ADD_OPTIONS":
      return {
        ...state,
        blocks: state.blocks.map((e, i) =>
          i === state.index
            ? {
                ...e,
                questionParams: [
                  ...(e.questionParams as string[]),
                  action.question,
                ],
              }
            : e
        ),
      };
    case "DELETE_OPTIONS":
      return {
        ...state,
        blocks: state.blocks.map((e, i) =>
          i === state.index
            ? {
                ...e,
                questionParams: (e.questionParams as string[]).filter(
                  (e, i) => i !== action.idx
                ),
              }
            : e
        ),
      };
    case "CHANGE_OPTIONS":
      return {
        ...state,
        blocks: state.blocks.map((e, i) =>
          i === state.index
            ? {
                ...e,
                questionParams: (e.questionParams as string[]).map((e, i) =>
                  i === action.idx ? action.question : e
                ),
              }
            : e
        ),
      };
    case "ADD":
      return {
        ...state,
        index: state.blocks.length,
        blocks: [...state.blocks, initialValue],
      };
    case "DELETE":
      return {
        ...state,
        index: 0,
        blocks: state.blocks.filter((e, i) => i !== action.idx),
      };
    case "CHANGE": {
      return {
        ...state,
        blocks: state.blocks.map((e, i) =>
          i === state.index ? { ...e, type: action.block } : e
        ),
      };
    }
    case "INDEX":
      return {
        ...state,
        index: action.idx,
      };
    case "DRAG":
      return {
        ...state,
        blocks: [
          ...state.blocks
            .slice(0, action.end)
            .filter((e, i) =>
              action.start < action.end ? i !== action.start : true
            ),
          state.blocks[action.start],
          ...state.blocks
            .slice(action.end, state.blocks.length)
            .filter((e, i) =>
              action.start < action.end ? true : i !== action.start - action.end
            ),
        ],
      };
    case "DATE":
      return {
        ...state,
        lastDate: action.lastDate,
      };
    default:
      throw new Error("");
  }
};
