import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import React, { useState, useLayoutEffect, MouseEvent, ReactNode } from "react";
import { PolygonIcon } from "@/assets/polygon-icon";
export interface ISelectProps {
  now: string;
  children: ReactNode;
}

export const Select = ({ now, children }: ISelectProps) => {
  const [state, setState] = useState<boolean>(false);
  useLayoutEffect(() => {
    document.addEventListener("click", () => {
      setState(false);
    });
  }, [state]);
  return (
    <>
      <_Layout>
        <_InfoButton
          id={now}
          {...{ state }}
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
            setState((prev) => !prev);
          }}
        >
          <div>{now}</div>
          <_SelectIcon {...{ state }}>
            <PolygonIcon />
          </_SelectIcon>
        </_InfoButton>
        <_SelectList {...{ state }}>{children}</_SelectList>
      </_Layout>
    </>
  );
};
const Spin = (x: number, y: number) => keyframes`
 0% {
    transform: rotate(${x}deg);
 }
 100% {
  transform: rotate(${y}deg);
 }
`;
const _SelectList = styled.div<{ state: boolean }>`
  visibility: ${(props) => (props.state ? "visible" : "hidden")};

  box-shadow: 1px 1px 10px 5px rgba(231, 95, 176, 0.2);
  border-radius: 8px;

  > div {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.color.white};
    position: relative;

    width: 122px;
    height: 32px;

    color: ${(props) => props.theme.color.black};
    font: ${({ theme }) => theme.font.Body4};

    line-height: 32px;
    text-align: center;
    cursor: pointer;

    :last-of-type {
      border-radius: 0px 0px 8px 8px;
    }
    :first-of-type {
      border-radius: 8px 8px 0px 0px;
    }
  }

  > div:hover {
    background-color: ${({ theme }) => theme.color.gray300};
  }
`;
const _InfoButton = styled.div<{ state: boolean }>`
  width: 122px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  color: ${(props) => props.theme.color.black};
  border: 2px solid ${({ theme }) => theme.color.gray700};
  font: ${({ theme }) => theme.font.Body4};

  line-height: 32px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;

  div {
    text-align: center;
    width: 60px;
  }
`;
const _SelectIcon = styled.span<{ state: boolean }>`
  display: flex;
  align-items: center;
  animation: ${(props) => (props.state ? Spin(0, 180) : Spin(180, 0))} 0.25s
    ease-in-out 0s alternate forwards;
`;
const _Layout = styled.div`
  position: relative;
  width: 122px;
  height: 32px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
