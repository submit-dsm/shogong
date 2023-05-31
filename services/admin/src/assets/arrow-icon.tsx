import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export const ArrowIcon = () => {
  const router = useRouter();
  return (
    <_Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => router.back()}
    >
      <path
        d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
        fill={useTheme().color.black}
      />
    </_Svg>
  );
};
const _Svg = styled.svg`
  cursor: pointer;
  :hover {
    > path {
      fill: ${({ theme }) => theme.color.gray700};
    }
  }
`;
