import { FormContextProvider } from "@/hook/context";
import styled from "@emotion/styled";
import { TitleInput } from "../survey/title";
import { useState } from "react";

export interface ISurveyProps {
  type: string;
}
export const Survey = ({ type }: ISurveyProps) => {
  const [state, setState] = useState<{ title: string }>({ title: "" });
  return (
    <>
      <FormContextProvider>
        <_Layout>
          <TitleInput
            onInput={(e) => {
              setState((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
        </_Layout>
      </FormContextProvider>
    </>
  );
};
const _Layout = styled.div``;
