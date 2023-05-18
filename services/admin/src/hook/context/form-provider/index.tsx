import { useContext, createContext, ReactNode, useState } from "react";

export const FormValueContext = createContext({});
export const FormActionContext = createContext({});
export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({});
  return (
    <>
      <FormActionContext.Provider value={setState}>
        <FormValueContext.Provider value={state}>
          {children}
        </FormValueContext.Provider>
      </FormActionContext.Provider>
    </>
  );
};
