import { ChangeEvent, useState } from "react";

export const useAuth = <T extends Object>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);
  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return { state, onInput };
};
