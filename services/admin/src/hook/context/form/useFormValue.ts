import { useContext } from "react";
import { FormValueContext } from ".";
export const useFormValue = () => {
  const value = useContext(FormValueContext);
  if (value === undefined) {
    throw new Error("dateAction error");
  }
  return value;
};
