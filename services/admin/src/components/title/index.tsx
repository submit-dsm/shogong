import styled from "@emotion/styled";
import { ChangeEvent } from "react";

export interface FormTitleInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export const FormTitleInput = (props: FormTitleInputProps) => (
  <>
    <_Input {...props} placeholder="제목을 입력해주세요." />
  </>
);
const _Input = styled.input`
  outline: none;
  border: none;

  font: ${({ theme }) => theme.font.Heading1};
  color: ${({ theme }) => theme.color.black};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray500};
  }
`;
