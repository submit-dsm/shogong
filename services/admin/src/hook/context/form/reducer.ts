import { Dispatch } from "react";
import { type Block } from "@package/api-type";

export type State = { index: number; blocks: Block[] };
export type Action =
  | {
      type: "CHANGE";
      block: "SHORT_ANSWER" | "FILE" | "LONG_ANSWER" | "RADIO" | "CHECKBOX";
    }
  | { type: "WRITE"; question: string }
  | { type: "ADD_OPTIONS"; question: string }
  | { type: "DELETE_OPTIONS"; idx: number }
  | { type: "ADD" }
  | { type: "DELETE"; idx: number }
  | { type: "INDEX"; idx: number };

export type SampleDispatch = Dispatch<Action>;

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
    case "ADD":
      return {
        index: state.blocks.length,
        blocks: [
          ...state.blocks,
          {
            id: "",
            type: "SHORT_ANSWER",
            question: "",
            isEssential: false,
            answerParams: "",
          },
        ],
      };
    case "DELETE":
      return {
        index: 0,
        blocks: state.blocks.filter((e, i) => i !== action.idx),
      };
    case "CHANGE":
      return {
        ...state,
        blocks: state.blocks.map((e, i) =>
          i === state.index
            ? {
                id: "",
                type: action.block,
                question: "",
                isEssential: false,
                questionParams: [],
                answerParams: [],
              }
            : e
        ),
      };
    case "INDEX":
      return {
        ...state,
        index: action.idx,
      };
    default:
      return state;
  }
};
