import { NextPage } from "next";
import { TextInput } from "@/components/input";
import { Password } from "@/components/input/password";
import { useAuth } from "@/hook/useAuth";
import { AuthTemplate } from "@/components/auth";
import { InitialStateType, initialState } from "@/util/auth";
const LoginPage: NextPage = () => {
  const { state, onInput } = useAuth<InitialStateType & { name: string }>({
    ...initialState,
    name: "",
  });
  return (
    <>
      <AuthTemplate legend="로그인" onSubmit={() => {}}>
        <TextInput
          {...{ onInput }}
          name={"name"}
          label={"이름"}
          value={state.account_id}
        />
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
