import styled from "@emotion/styled";

interface Props {
  title: string;
  children: JSX.Element;
}

const PageContainer = ({ title, children }: Props) => {
  return (
    <_PageWrapper>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </_PageWrapper>
  );
};

const _PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  > div {
    width: calc(100% - 196px);
    > h1 {
      font: ${({ theme }) => theme.font.Heading3};
    }
  }
`;

export default PageContainer;
