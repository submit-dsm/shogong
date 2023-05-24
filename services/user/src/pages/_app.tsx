import { ThemeProvider, Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme, global } from "../../../../packages/ui/src";
import styled from "@emotion/styled";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </ThemeProvider>
  );
}

const PageContainer = styled.div`
  width: 100%;
  padding: 0 16px;
`;
