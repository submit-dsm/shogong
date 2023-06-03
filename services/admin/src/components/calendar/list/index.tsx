import styled from "@emotion/styled";
import { DayBox } from "../box";
import { useMemo } from "react";
import { getDate } from "@/hook/calendar/useGetDate";
export interface DayListProps {
  state: { year: number; month: number; now: number };
  changeState: (newDay: number) => void;
}
export const DayList = ({ state, changeState }: DayListProps) => {
  const dateList = useMemo(
    () => getDate(state.year, state.month),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.month, state.year]
  );
  return (
    <>
      <_Layout>
        <li key={`first${state.month}${state.year}`}>
          <ul>
            {new Array(7 - dateList.first.length).fill("").map((_e, i) => (
              <_Box key={`setting${i}${state.month}${state.year}`} />
            ))}
            {dateList.first.map((e) => (
              <DayBox {...{ e, state, changeState }} />
            ))}
          </ul>
        </li>

        {dateList.middle.map((e, i) => (
          <li key={`unique${i}${state.month}${state.year}`}>
            <ul>
              {e.map((e) => (
                <DayBox {...{ e, state, changeState }} />
              ))}
            </ul>
          </li>
        ))}

        <li key={`third${state.month}${state.year}`}>
          <ul>
            {dateList.last.map((e) => (
              <DayBox {...{ e, state, changeState }} />
            ))}
          </ul>
        </li>
      </_Layout>
    </>
  );
};
const _Layout = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0;
  > li {
    list-style: none;
    > ul {
      padding: 0;
      display: flex;
    }
  }
`;
const _Box = styled.li`
  list-style: none;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.white};
`;
