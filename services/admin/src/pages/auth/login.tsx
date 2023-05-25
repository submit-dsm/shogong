import { NextPage } from "next";
import { TextInput } from "@/components/input";
import { Password } from "@/components/input/password";
import { useAuth } from "@/hook/useAuth";
import { AuthTemplate } from "@/components/auth";
const LoginPage: NextPage = () => {
  const { state, onInput } = useAuth<{
    account_id: string;
    password: string;
  }>({ account_id: "", password: "" });
  return (
    <>
      <AuthTemplate legend="로그인" onSubmit={() => {}}>
        <TextInput
          {...{ onInput }}
          name={"account_id"}
          label={"아이디"}
          value={state.account_id}
        />
        <Password
          {...{ onInput }}
          name={"password"}
          label={"비밀번호"}
          value={state.password}
        />
      </AuthTemplate>
    </>
  );
};
export default LoginPage;
