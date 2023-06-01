import { FormContextProvider } from "@/hook/context";
import styled from "@emotion/styled";
import { TitleInput } from "../survey/title";
import { useState } from "react";
import { SurveyList } from "../survey";

export interface IFormProps {
  type: string;
}
export const Form = () => {
  const [state, setState] = useState<{ title: string }>({ title: "" });
  return (
    <>
      <_Layout>
        <SurveyList />
      </_Layout>
    </>
  );
};
const _Layout = styled.div`
  width: 1128px;
`;
