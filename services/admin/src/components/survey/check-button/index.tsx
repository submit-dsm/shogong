import styled from "@emotion/styled";
import { ChangeEvent } from "react";

export interface ICheckButton {
  type: "checkbox" | "radio";
  checked: boolean;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export const CheckButton = (props: ICheckButton) => {
  return (
    <>
      <_Label>
        <input {...props} />
        {props.value}
      </_Label>
    </>
  );
};
const _Label = styled.label`
  display: flex;
  align-items: center;
  height: 22px;

  font: ${({ theme }) => theme.font.Body2};
  color: ${({ theme }) => theme.color.gray900};
  line-height: 30px;
  > input {
    width: 22px;
    height: 22px;

    accent-color: ${({ theme }) => theme.color.main500};
  }
`;
