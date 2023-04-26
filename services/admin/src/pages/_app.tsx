import { ThemeProvider, Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { theme, global } from "@package/ui";
import Head from "next/head";
import { QueryClient, Hydrate, QueryClientProvider } from "react-query";
import { useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const [client] = useState(() => new QueryClient());
  return (
    <QueryClientProvider {...{ client }}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider {...{ theme }}>
          <Global styles={global} />
          <Head>
            <title>submit</title>
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

type ThemeTpye = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends ThemeTpye {}
}
