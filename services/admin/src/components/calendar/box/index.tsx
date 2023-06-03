import styled from "@emotion/styled";
import { DayListProps } from "../list";
import { useFormValue } from "@/hook/context/form/useFormValue";
export interface DayBoxProps extends DayListProps {
  e: { nowDate: number; isBefore: boolean };
}
export const DayBox = ({ state, e, changeState }: DayBoxProps) => {
  const nowDate = new Date(state.year, state.month + 1, e.nowDate);
  const { lastDate } = useFormValue();
  return (
    <_DateBox
      {...{
        key: `${nowDate}${e.nowDate}`,
        isBefore: e.isBefore,
        onClick: () => {
          if (e.isBefore) {
            window.alert("이전 날짜는 선택할 수 없습니다.");
          } else {
            changeState(e.nowDate);
          }
        },
        now:
          nowDate.toISOString().substring(0, 10) ==
          lastDate.toISOString().substring(0, 10),
      }}
    >
      <div key={`${nowDate}${e.nowDate}`}>{e.nowDate}</div>
    </_DateBox>
  );
};
const _DateBox = styled.li<{
  isBefore: boolean;
  now: boolean;
}>`
  list-style: none;
  width: 40px;
  height: 40px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.color.white};
  font: ${({ theme }) => theme.font.Body4};

  line-height: 40px;
  text-align: center;

  > div {
    color: ${({ theme, isBefore, now }) =>
      now
        ? theme.color.white
        : isBefore
        ? theme.color.gray500
        : theme.color.gray900};
    box-shadow: 0 0 0 2px "transparent" inset;
    background-color: ${({ theme, now }) =>
      now ? theme.color.black : theme.color.white};
    border-radius: 50%;
    :hover {
      background-color: ${({ theme }) => theme.color.gray700};
      color: ${({ theme }) => theme.color.white};
    }
  }
`;
