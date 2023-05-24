import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

export type FlexOption = {
  dir?: "column" | "row";
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  margin?: string | number;
  padding?: string | number;
  gap?: number;
  shrink?: number;
  grow?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
};

export const flexGenerator = (props: FlexOption) => css`
  display: flex;
  flex-direction: ${props.dir || "row"};
  align-items: ${props.align || "stretch"};
  justify-content: ${props.justify || "flex-start"};
  width: ${props.fullWidth ? "100%" : "auto"};
  height: ${props.fullHeight ? "100%" : "auto"};
  gap: ${props.gap || 0}px;
  padding: ${props.padding || 0};
  margin: ${props.margin || 0};
  flex-grow: ${props.grow || 0};
  flex-shrink: ${props.shrink || 1};
`;

export const Flex = styled.div<FlexOption>`
  ${(props) => flexGenerator(props)};
`;

Flex.displayName = "FlexBox";
