import ActionBar from "@/components/survey/ActionBar";
import styled from "@emotion/styled";

interface Props {
  title: string;
  content: string;
}

const SurveyDetail = ({ title, content }: Props) => {
  return (
    <DetailPageContainer>
      <ActionBar>{title}</ActionBar>
      <p>{content}</p>
    </DetailPageContainer>
  );
};

const DetailPageContainer = styled.div`
  > p {
    font: ${({ theme }) => theme.font.Body4};
    color: ${({ theme }) => theme.color.gray900};
  }
`;

export default SurveyDetail;
