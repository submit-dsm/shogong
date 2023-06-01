import { useContext } from "react";
import { FormActionContext } from ".";
export const useFormActions = () => {
  const action = useContext(FormActionContext);
  if (action === undefined) {
    throw new Error("formAction error");
  }
  return action;
};
