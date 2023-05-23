import { NextPage } from "next";
import Image from "next/image";
import styled from "@emotion/styled";
import { background } from "images";
const LoginPage: NextPage = () => {
  return (
    <>
      <_Main>
        <Image src={background} alt={""} fill priority />
        <_Form>
          <_Legend>로그인</_Legend>
        </_Form>
      </_Main>
    </>
  );
};
export default LoginPage;
const _Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const _Form = styled.form`
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
const _Layout = styled.div`
  display: flex;
  flex-direction: column;
`;
