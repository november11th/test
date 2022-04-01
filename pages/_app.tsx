import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import APP_DEFAULT_SEO from "../next-seo.config";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...APP_DEFAULT_SEO} />
      <Head>
        <meta
          data-rh="true"
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1"
        />
        <meta charSet="utf-8" />
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
