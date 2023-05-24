import AppBar from "@/components/common/AppBar";
import { Flex } from "@/components/common/Flex";
import Post from "@/components/main/Post";
import styled from "@emotion/styled";

const Main = () => {
  return (
    <>
      <AppBar>설문조사</AppBar>
      <TextBox>
        <h1>미참여 설문조사 2개</h1>
        <p>기한이 끝나기 전까지 설문조사에 참여해주세요.</p>
      </TextBox>
      <StyledFlex gap={8} dir="column">
        <Post
          id="1"
          title="3-1반 정부반장 선거"
          time={24}
          tagArr={["3-1", "좌찬익선생님", "익명"]}
        />
        <Post
          id="2"
          title="학생 생일자 파티를 위한 설문조사"
          time={50}
          tagArr={["전체", "자치회"]}
        />
      </StyledFlex>
      <TextBox>
        <h1>참여한 설문조사 2개</h1>
        <p>남은 시간동안 답변을 수정할 수 있어요.</p>
      </TextBox>
      <StyledFlex>
        <Post
          id="3"
          title="2023년 1학기 방과후 신청"
          time={1}
          tagArr={["전체", "이성희선생님"]}
        />
      </StyledFlex>
    </>
  );
};

const TextBox = styled.div`
  > h1 {
    font: ${({ theme }) => theme.font.Body1};
    margin: 24px 0 4px;
  }
  > p {
    font: ${({ theme }) => theme.font.Caption};
    color: ${({ theme }) => theme.color.gray700};
  }
`;

const StyledFlex = styled(Flex)`
  margin: 8px 0 32px 0;
`;

export default Main;
