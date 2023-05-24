import Head from "next/head";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import AppBar from "@/components/common/AppBar";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { Flex } from "@/components/common/Flex";

interface UserInfoProps {
  account_id: string;
  password: string;
}

export default function Home() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfoProps>({
    account_id: "",
    password: "",
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickLogin = () => {
    router.push("/main");
  };

  return (
    <>
      <Head>
        <title>Submit App</title>
      </Head>
      <AppBar>로그인</AppBar>
      <StyledFlex gap={8} dir="column">
        <Input
          placeholder="아이디"
          type="text"
          name="account_id"
          value={userInfo.account_id}
          onChange={onChangeInput}
        />
        <Input
          placeholder="비밀번호"
          type="password"
          name="password"
          value={userInfo.password}
          onChange={onChangeInput}
        />
      </StyledFlex>
      <Button
        disabled={!(userInfo.account_id && userInfo.password)}
        onClick={onClickLogin}
      >
        로그인
      </Button>
    </>
  );
}

const StyledFlex = styled(Flex)`
  margin: 32px 0 20px 0;
`;
