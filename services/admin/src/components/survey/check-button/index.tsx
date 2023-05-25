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
const _Input = styled.input`
  width: 22px;
  height: 22px;

  accent-color: ${({ theme }) => theme.color.main500};
`;
