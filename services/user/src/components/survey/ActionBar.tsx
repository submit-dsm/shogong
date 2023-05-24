import { arrow } from "@/assets/survey";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children: string;
}

const ActionBar = ({ children }: Props) => {
  return (
    <ActionBarContainer>
      <Link href={"/main"}>
        <Image src={arrow} alt="arrow" />
      </Link>
      {children}
    </ActionBarContainer>
  );
};

const ActionBarContainer = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${({ theme }) => theme.font.Body1};
  color: ${({ theme }) => theme.color.black};
  > a {
    position: absolute;
    left: 16px;
  }
`;

export default ActionBar;
