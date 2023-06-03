import styled from "@emotion/styled";

export interface IStudentsInputProps {
  value: string;
}
export const StudentsInput = (props: IStudentsInputProps) => (
  <_Input {...props} readOnly placeholder="참여학생군을 입력해주세요." />
);
const _Input = styled.input`
  width: 300px;
  height: 50px;
  padding: 0 20px;

  outline: none;
  color: ${({ theme }) => theme.color.black};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray700};
  }
`;
