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
          <_Legend>dddd</_Legend>
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
  padding: 80px 64px 64px 115px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const _Legend = styled.div`
  font: ${({ theme }) => theme.font.Heading1};
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.color.gray300};
`;
