import { createContext, ReactNode, useReducer } from "react";
import { type State, reducer, type SampleDispatch } from "./reducer";
export const FormValueContext = createContext<State>({
  index: 0,
  blocks: [
    {
      id: "",
      type: "SHORT_ANSWER",
      question: "",
      isEssential: false,
      questionParams: "",
      answerParams: "",
    },
  ],
});

export const FormActionContext = createContext<SampleDispatch>(() => null);
export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    index: 0,
    blocks: [
      {
        id: "",
        type: "SHORT_ANSWER",
        question: "",
        isEssential: false,
        questionParams: "",
        answerParams: "",
      },
    ],
  });
  return (
    <>
      <FormActionContext.Provider value={dispatch}>
        <FormValueContext.Provider value={state}>
          {children}
        </FormValueContext.Provider>
      </FormActionContext.Provider>
    </>
  );
};
