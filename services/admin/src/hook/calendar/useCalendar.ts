import { useCallback, useLayoutEffect, useState } from "react";
import { useFormActions } from "../context/form/useFormAction";
import { ICalendarModal } from "@/components/calendar/button";

export const useCalendar = ({ modal, setModal }: ICalendarModal) => {
  const dispatch = useFormActions();
  const [state, setState] = useState<{
    year: number;
    month: number;
    now: number;
  }>({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    now: new Date().getDate(),
  });
  useLayoutEffect(() => {
    dispatch({
      type: "DATE",
      lastDate: new Date(state.year, state.month + 1, state.now),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);
  const changeState = useCallback((now: number) => {
    setState((prev) => ({
      ...prev,
      now,
    }));
    setModal(() => false);
  }, []);
  const nextMonth = useCallback(() => {
    setState((prev) => {
      return {
        ...prev,
        year: new Date(prev.year, prev.month + 1, 1).getFullYear(),
        month: new Date(prev.year, prev.month + 1, 1).getMonth(),
      };
    });
  }, [state.month, state.year]);
  // 이전 달 이동
  const beforeMonth = useCallback(() => {
    setState((prev) => {
      return {
        ...prev,
        year: new Date(prev.year, prev.month - 1, 1).getFullYear(),
        month: new Date(prev.year, prev.month - 1, 1).getMonth(),
      };
    });
  }, [state.month, state.year]);
  return {
    modal,
    beforeMonth,
    nextMonth,
    changeState,
    state,
  };
};
