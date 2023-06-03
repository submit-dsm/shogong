import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import { SurveyList } from "../survey";
import { Calendar } from "../calendar";
import { CheckButton } from "../survey/check-button";
import { Layout } from "../layout";
import { ParticipatingGroup } from "../students";
import { TextArea } from "../textarea";
import { FormTitleInput } from "../title";

export const Form = () => {
  const [state, setState] = useState<{ checked: boolean }>({ checked: false });
  const onChange = () => {
    setState((prev) => ({ ...prev, checked: !prev.checked }));
  };
  return (
    <>
      <_Layout>
        <FormTitleInput
          onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          value={""}
        />
        <TextArea
          onChange={function (e: ChangeEvent<HTMLTextAreaElement>): void {
            throw new Error("Function not implemented.");
          }}
          defaultValue={""}
        />
        <_Flex>
          <ParticipatingGroup
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            value={""}
          />
          <Calendar />
        </_Flex>
        <Layout text={"익명"}>
          <_FlexCheck>
            <CheckButton
              type={"radio"}
              checked={state.checked}
              name={"vote"}
              onChange={onChange}
              value={"실명투표"}
            />
            <CheckButton
              type={"radio"}
              checked={!state.checked}
              name={"vote"}
              onChange={onChange}
              value={"익명투표"}
            />
          </_FlexCheck>
        </Layout>
        <SurveyList />
      </_Layout>
    </>
  );
};
const _Layout = styled.div`
  width: 1128px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 0;
`;
const _Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const _FlexCheck = styled.div`
  display: flex;
  gap: 16px;
`;
