import { FormContextProvider } from "@/hook/context";
import styled from "@emotion/styled";

export interface ISurveyProps {
  type: string;
}
export const Survey = ({ type }: ISurveyProps) => {
  return (
    <>
      <FormContextProvider>
        <_Layout>{}</_Layout>
      </FormContextProvider>
    </>
  );
};
const _Layout = styled.div``;
