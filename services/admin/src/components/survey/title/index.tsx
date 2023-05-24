import styled from "@emotion/styled";
export interface ITitleInputProps {
  onInput: () => void;
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

  width: 648px;
  height: 46px;

  font: ${({ theme }) => theme.font.Heading5};
  color: ${({ theme }) => theme.color.gray700};
`;
