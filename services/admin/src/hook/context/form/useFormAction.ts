import { useContext } from "react";
import { FormActionContext } from ".";
export const useFormActions = () => {
  const value = useContext(FormActionContext);
  if (value === undefined) {
    throw new Error("formAction error");
  }
  return value;
};
