import { useState } from "react";
import { ITextInputProps, _Input, _Label, _Layout } from ".";
import styled from "@emotion/styled";
import { SeePasswordIcon } from "@/assets/see-password-icon";
export interface IPasswordProps extends ITextInputProps {}
export const Password = ({ label, ...props }: IPasswordProps) => {
  const [state, setState] = useState<boolean>(false);
  return (
    <>
      <_Layout>
        <_Label htmlFor={props.name}>{label}</_Label>
        <_InputLayout>
          <_Input
            id={props.name}
            {...props}
            type={state ? "text" : "password"}
            required
          />
          <div onClick={() => setState((prev) => !prev)}>
            <SeePasswordIcon />
          </div>
        </_InputLayout>
      </_Layout>
    </>
  );
};
const _InputLayout = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: 20px;
  border: 1px solid ${({ theme }) => theme.color.gray700};

  > input {
    flex-grow: 1;
  }
`;
