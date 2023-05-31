import { NextPage } from "next";
import { TextInput } from "@/components/input";
import { Password } from "@/components/input/password";
import { useAuth } from "@/hook/useAuth";
import { AuthTemplate } from "@/components/auth";
import { InitialStateType, initialState } from "@/util/auth";
import { useRouter } from "next/router";
import { SubmitButton } from "@/components/input/submit-button";
import { Button } from "@/components/button";
import { signup } from "@/api/auth/signup";
const LoginPage: NextPage = () => {
  const { state, onInput } = useAuth<InitialStateType & { name: string }>({
    ...initialState,
    name: "",
  });
  const router = useRouter();
  return (
    <>
      <AuthTemplate legend="회원가입">
        <TextInput
          {...{ onInput }}
          name={"name"}
          label={"이름"}
          value={state.name}
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
        <SubmitButton
          value={"회원가입"}
          onClick={() => {
            signup(state);
            router.push("/auth/login");
          }}
        />
        <Button
          onClick={() => {
            router.push("/auth/login");
          }}
          value={"로그인"}
        />
      </AuthTemplate>
    </>
  );
};
export default LoginPage;
