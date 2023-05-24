import { useState, useEffect, RefObject } from "react";

const useDetectClose = (ref: RefObject<HTMLElement>, initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(!isOpen);
      }
    };
    if (isOpen) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isOpen, ref]);

  return [isOpen, setIsOpen] as const;
};

export default useDetectClose;
