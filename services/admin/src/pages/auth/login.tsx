import { NextPage } from "next";
import { TextInput } from "@/components/input";
import { Password } from "@/components/input/password";
import { useAuth } from "@/hook/useAuth";
import { AuthTemplate } from "@/components/auth";
import { initialState, type InitialStateType } from "@/util/auth";
import { useRouter } from "next/router";
import { SubmitButton } from "@/components/input/submit-button";
import axios from "axios";
const LoginPage: NextPage = () => {
  const { state, onInput } = useAuth<InitialStateType>(initialState);
  const router = useRouter();
  return (
    <>
      <AuthTemplate
        legend="로그인"
        onSubmit={() => {
          axios.post("http://localhost:8080/", {});
        }}
      >
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
        <SubmitButton value={"로그인"} />
      </AuthTemplate>
    </>
  );
};
export default LoginPage;
