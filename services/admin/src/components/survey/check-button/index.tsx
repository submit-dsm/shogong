import styled from "@emotion/styled";
import { ChangeEvent } from "react";

export interface ICheckButton {
  type: "checkbox" | "radio";
  checked: boolean;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const CheckButton = (props: ICheckButton) => {
  return (
    <>
      <_Input {...props} />
    </>
  );
};
const _Input = styled.input``;
const _Label = styled.label``;
