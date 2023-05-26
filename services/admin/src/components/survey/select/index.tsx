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
          <_SelectIcon {...{ state: state }}>
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
  width: auto;
  height: auto;
  box-shadow: 1px 1px 10px 5px rgba(231, 95, 176, 0.2);
  > div {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.color.white};
    position: relative;
    width: 150px;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    color: ${(props) => props.theme.color.black};
    border: 1px solid #d3d3d3;
    text-align: center;
    font: 500 normal 20px "pretendard", sans-serif;
    line-height: 40px;
    :last-child {
      border-radius: 0px 0px 5px 5px;
    }
  }

  div:hover {
    background-color: ${(p) => p.theme.color.gray300};
  }
`;
const _InfoButton = styled.div<{ state: boolean }>`
  width: 150px;
  height: 40px;
  border-radius: 5px 5px ${(props) => (props.state ? 0 : 5)}px
    ${(props) => (props.state ? 0 : 5)}px;
  font: 500 normal 20px "Pretendard", sans-serif;
  line-height: 40px;
  color: ${(props) => props.theme.color.white};

  background-color: ${(props) => props.theme.color.main700};
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0 10px;
  div {
    text-align: center;
    width: 75px;
  }
`;
const _SelectIcon = styled.span<{ state: boolean }>`
  display: flex;
  align-items: center;
  animation: ${(props) => (props.state ? Spin(0, 180) : Spin(180, 0))} 0.25s
    ease-in-out 0s alternate forwards;
`;
const _Layout = styled.div`
  margin-top: 10px;
  width: 150px;
  height: 40px;
  position: relative;
`;
