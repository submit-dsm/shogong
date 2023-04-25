import React from "react";
import { global } from "./global";
import { theme } from "./theme";
import { ThemeProvider, Global } from "@emotion/react";

const StyleProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global}></Global>
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
