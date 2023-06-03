import styled from "@emotion/styled";
import { MemoDayTitle } from "../title";
import { DayList } from "../list";
import { useCalendar } from "@/hook/calendar/useCalendar";
import { ICalendarModal } from "../button";
export const Table = (props: ICalendarModal) => {
  const { state, beforeMonth, nextMonth, changeState, modal } =
    useCalendar(props);

  return (
    <>
      {modal ? (
        <_Layout
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <_TitleLayout>
            <div>
              <button onClick={beforeMonth}>{"<"}</button>
            </div>
            <div>
              <h6>{`${state.year}년 ${state.month + 1}월`}</h6>
            </div>
            <div>
              <button onClick={nextMonth}>{">"}</button>
            </div>
          </_TitleLayout>
          <div>
            <MemoDayTitle />
            <DayList {...{ state, changeState }} />
          </div>
        </_Layout>
      ) : (
        <></>
      )}
    </>
  );
};
const _Layout = styled.div`
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;

  gap: 14px;

  margin-top: 20px;
  width: 320px;
  padding: 20px;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.white};

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px 10px;
`;
const _TitleLayout = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  > div {
    > button {
      width: 20px;
      height: 20px;
      line-height: 20px;

      cursor: pointer;
      border: none;

      font: ${({ theme }) => theme.font.Body4};
      color: ${({ theme }) => theme.color.gray700};
      background-color: ${({ theme }) => theme.color.white};

      :hover {
        color: ${({ theme }) => theme.color.black};
      }
    }
    > h6 {
      font: ${({ theme }) => theme.font.Body3};
      color: ${({ theme }) => theme.color.gray700};
    }
  }
`;
