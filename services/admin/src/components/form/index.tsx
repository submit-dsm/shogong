import styled from "@emotion/styled";

export interface SurveyProps {
  type: string;
}
export const Survey = ({type}:SurveyProps) => {
  return (
    <>
          <_Layout>{switch(type) {case"":<></>
        break;}}}</_Layout>
    </>
  );
};
const _Layout = styled.div``;
