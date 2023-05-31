import styled from "@emotion/styled";
import { ChangeEvent } from "react";
export interface ITitleInputProps {
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const TitleInput = (props: ITitleInputProps) => {
  return (
    <>
      <_Input {...props} placeholder={"제목을 입력해주세요."} />
    </>
  );
};
const _Input = styled.input`
  padding: 10px;
  outline: none;

  width: 648px;
  height: 46px;

  font: ${({ theme }) => theme.font.Heading5};
  color: ${({ theme }) => theme.color.gray700};
`;
