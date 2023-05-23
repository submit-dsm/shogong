import { FormContextProvider } from "@/hook/context";
import styled from "@emotion/styled";

export interface SurveyProps {
  type: string;
}
export const Survey = ({ type }: SurveyProps) => {
  return (
    <>
      <FormContextProvider>
        <_Layout>{}</_Layout>
      </FormContextProvider>
    </>
  );
};
const _Layout = styled.div``;
