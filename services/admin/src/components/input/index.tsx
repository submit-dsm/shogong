import styled from "@emotion/styled";
import { ChangeEvent } from "react";

export interface TextInputProps {
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  type: string;
}
export const TextInput = ({ label, ...props }: TextInputProps) => {
  return (
    <>
      <_Layout>
        <_Label htmlFor={props.name}>{label}</_Label>
        <_Input id={props.name} {...props} />
      </_Layout>
    </>
  );
};
export const _Input = styled.input`
  height: 50px;

  color: ${({ theme }) => theme.color.black};
  font: ${({ theme }) => theme.font.Body1};

  padding: 0 20px;
  border: 1px solid ${({ theme }) => theme.color.gray700};

  ::placeholder {
    color: ${({ theme }) => theme.color.gray700};
  }
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
