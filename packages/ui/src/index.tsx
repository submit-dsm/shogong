import React from "react";
import { global } from "./global";
import { theme } from "./theme";
import { ThemeProvider, Global } from "@emotion/react";

export const StyleProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Global styles={global} /> */}
      {children}
    </ThemeProvider>
  );
};

type ThemeType = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
