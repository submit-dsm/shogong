import { ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Layout } from "../layout";

export interface ITextAreaProps {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  defaultValue: string;
}
export const TextArea = (props: ITextAreaProps) => (
  <Layout text="설문 설명">
    <_TextArea {...props} placeholder="설명을 입력해주세요." />
  </Layout>
);
const _TextArea = styled.textarea`
  height: 150px;

  outline: none;
  resize: none;

  border: 1px solid ${(props) => props.theme.color.gray700};
  border-radius: 5px;

  font: ${({ theme }) => theme.font.Body1};

  color: ${(props) => props.theme.color.black};
  padding: 13px 20px;

  ::placeholder {
    color: ${(props) => props.theme.color.gray700};
  }
`;
