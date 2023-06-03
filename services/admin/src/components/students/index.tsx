import styled from "@emotion/styled";
import { Layout } from "../layout";
import { IStudentsInputProps, StudentsInput } from "./input";
import { IStudentButtonProps, StudentButton } from "./button";

export const ParticipatingGroup = ({
  onClick,
  value,
}: IStudentButtonProps & IStudentsInputProps) => (
  <Layout text="참여학생군 선택">
    <_Layout>
      <StudentsInput {...{ value }} />
      <StudentButton {...{ onClick }} />
    </_Layout>
  </Layout>
);
const _Layout = styled.div`
  display: flex;
  gap: 20px;
`;
