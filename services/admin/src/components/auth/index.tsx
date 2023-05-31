import Image from "next/image";
import styled from "@emotion/styled";
import { background } from "images";
import { ReactNode } from "react";
import { ArrowIcon } from "@/assets/arrow-icon";
export interface IAuthTemplate {
  children: ReactNode;
  legend: string;
}
export const AuthTemplate = ({ children, legend }: IAuthTemplate) => {
  return (
    <>
      <_Main>
        <Image src={background} alt={"배경이미지"} fill priority />
        <_Form>
          <div>
            <ArrowIcon />
          </div>
          <_Legend>{legend}</_Legend>
          {children}
        </_Form>
      </_Main>
    </>
  );
};
const _Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const _Form = styled.div`
  position: absolute;

  width: 680px;
  height: 630px;

  background-color: ${({ theme }) => theme.color.white};
  padding: 80px 64px 115px 64px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const _Legend = styled.legend`
  font: ${({ theme }) => theme.font.Heading4};
  color: ${({ theme }) => theme.color.black};
  text-align: center;
`;
