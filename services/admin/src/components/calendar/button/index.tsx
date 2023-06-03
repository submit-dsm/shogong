import { useFormValue } from "@/hook/context/form/useFormValue";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useLayoutEffect } from "react";
export interface ICalendarModal {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}
export const CalendarButton = ({ modal, setModal }: ICalendarModal) => {
  const { lastDate } = useFormValue();
  useLayoutEffect(() => {
    if (modal) {
      document.addEventListener(
        "click",
        () => {
          setModal(false);
        },
        { once: true }
      );
    }
  }, [modal, setModal]);
  return (
    <>
      <_Button
        onClick={(e) => {
          e.stopPropagation();
          setModal((prev) => !prev);
        }}
        active={modal}
      >
        <div>
          {lastDate.getFullYear()}/{lastDate.getMonth()}/{lastDate.getDate()}
        </div>
      </_Button>
    </>
  );
};
const _Button = styled.button<{ active: boolean }>`
  width: 320px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${({ theme }) => theme.color.white};
  border: 2px solid
    ${(props) =>
      props.active ? props.theme.color.main500 : props.theme.color.gray700};
  border-radius: 5px;

  > div {
    color: ${({ theme }) => theme.color.gray700};
    font: ${({ theme }) => theme.font.Body2};
  }

  :hover {
    filter: brightness(0.9);
  }
`;
