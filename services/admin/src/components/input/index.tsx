import styled from "@emotion/styled";
import { ChangeEvent } from "react";

export interface ITextInputProps {
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  value: string;
}
export const TextInput = ({ label, ...props }: ITextInputProps) => {
  return (
    <>
      <_Layout>
        <_Label htmlFor={props.name}>{label}</_Label>
        <_TextInput id={props.name} {...props} type="text" required />
      </_Layout>
    </>
  );
};
export const _Input = styled.input`
  height: 50px;

  color: ${({ theme }) => theme.color.black};
  font: ${({ theme }) => theme.font.Body1};

  border: none;
  padding: 0 20px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.color.gray700};
  }
`;
const _TextInput = styled(_Input)`
  border: 1px solid ${({ theme }) => theme.color.gray700};
`;
export const _Label = styled.label`
  font: ${({ theme }) => theme.font.Body4};
  color: ${({ theme }) => theme.color.gray700};
`;
export const _Layout = styled.div`
  width: 552px;
  height: 78px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
