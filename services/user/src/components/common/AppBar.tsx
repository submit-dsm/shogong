import styled from "@emotion/styled";

interface Props {
  children: string;
}

const AppBar = ({ children }: Props) => {
  return <AppBarContainer>{children}</AppBarContainer>;
};

const AppBarContainer = styled.div`
  padding: 8px 0;
  font: ${({ theme }) => theme.font.Heading5};
`;

export default AppBar;
