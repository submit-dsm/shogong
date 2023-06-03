import styled from "@emotion/styled";
export interface IStudentButtonProps {
  onClick: () => void;
}
export const StudentButton = (props: IStudentButtonProps) => (
  <>
    <_Button {...props}>참여학생군 선택</_Button>
  </>
);

const _Button = styled.button`
  border: none;
  width: 100px;
  height: 50px;

  border-radius: 5px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.color.secondary500};
  color: ${({ theme }) => theme.color.white};
  font: ${({ theme }) => theme.font.Caption};
`;
