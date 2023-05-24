import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface Props {
  placeholder: string;
  value: string;
  name: string;
  type: "text" | "password";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ ...props }: Props) => {
  return <InputContainer id="input" {...props} />;
};

const InputContainer = styled.input`
  width: calc(100vw - 32px);
  height: 52px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.gray500};
  padding: 0px 16px;
  outline: none;
  font: ${({ theme }) => theme.font.Body2};
  :focus {
    border: 1px solid ${({ theme }) => theme.color.main500};
  }
`;

export default Input;
