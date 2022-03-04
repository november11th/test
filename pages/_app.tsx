import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import { RecoilRoot } from "recoil";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Puzzle</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="퍼즐, 세상에 가치를 더하는 SK텔레콤 데이터 서비스"
        />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
