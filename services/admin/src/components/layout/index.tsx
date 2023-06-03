import styled from "@emotion/styled";
import { ReactNode } from "react";
export interface ILayout {
  text: string;
  children: ReactNode;
}
export const Layout = ({ text, children }: ILayout) => (
  <_Layout>
    {text}
    {children}
  </_Layout>
);
const _Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  color: ${({ theme }) => theme.color.gray500};
  font: ${({ theme }) => theme.font.Body4};
`;
