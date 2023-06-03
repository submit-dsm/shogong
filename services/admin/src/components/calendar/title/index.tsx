import { memo } from "react";
import styled from "@emotion/styled";
const DayTitle = () => {
  return (
    <>
      <_Box>
        {["일", "월", "화", "수", "목", "금", "토"].map((e) => (
          <li key={e}>{e}</li>
        ))}
      </_Box>
    </>
  );
};
export const MemoDayTitle = memo(DayTitle);
const _Box = styled.ul`
  display: flex;
  padding: 0;
  > li {
    list-style: none;
    width: 40px;
    height: 40px;

    font: ${({ theme }) => theme.font.Body3};
    line-height: 30px;
    text-align: center;
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
  }
`;
