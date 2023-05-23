import { Dispatch } from "react";
import { type CreateFormRequestDto } from "@package/api-type";

export type State = Pick<CreateFormRequestDto, "blocks"> & { index: number };
export type Action =
  | { type: "SHORT_ANSWER" }
  | { type: "LONG_ANSWER" }
  | { type: "RADIO" }
  | { type: "CHECKBOX" }
  | { type: "FILE" }
  | { type: "CHANGE"; question: string }
  | { type: "ADD_OPTIONS"; question: string }
  | { type: "DELETE_OPTIONS"; idx: number }
  | { type: "ADD" };

export type SampleDispatch = Dispatch<Action>;

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SHORT_ANSWER":
      return {
        ...state,
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
    case "LONG_ANSWER":
      return {
        ...state,
        blocks: [
          ...state.blocks,
          {
            id: "",
            type: "LONG_ANSWER",
            question: "",
            isEssential: false,
            answerParams: "",
          },
        ],
      };
    case "RADIO":
      return {
        ...state,
        blocks: [
          ...state.blocks,
          {
            id: "",
            type: "RADIO",
            question: "",
            isEssential: false,
            questionParams: [],
            answerParams: "",
          },
        ],
      };
    case "CHECKBOX":
      return {
        ...state,
        blocks: [
          ...state.blocks,
          {
            id: "",
            type: "CHECKBOX",
            question: "",
            isEssential: false,
            questionParams: [],
            answerParams: [],
          },
        ],
      };
    case "FILE":
      return {
        ...state,
        blocks: [
          ...state.blocks,
          {
            id: "",
            type: "FILE",
            question: "",
            isEssential: false,
            answerParams: [],
          },
        ],
      };
    case "CHANGE":
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
    default:
      return state;
  }
};
