import { createContext, ReactNode, useReducer } from "react";
import {
  type State,
  reducer,
  type SampleDispatch,
  initialValue,
} from "./reducer";
export const FormValueContext = createContext<State>({
  index: 0,
  blocks: [initialValue],
  lastDate: new Date(),
});
export const FormActionContext = createContext<SampleDispatch>(() => null);

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    index: 0,
    blocks: [initialValue],
    lastDate: new Date(),
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
