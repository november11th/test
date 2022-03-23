import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import {
  SITE_DESCRIPTION,
  SITE_IMAGE,
  SITE_TITLE,
  SITE_URL,
} from "../assets/common_texts";
import { getPageTitle } from "../utils/common";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
        <meta
          data-rh="true"
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1"
        />
        <meta charSet="utf-8" />
        <meta name="description" content={SITE_DESCRIPTION} />

        <meta property="og:site_name" content={SITE_TITLE} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={SITE_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:url" content={SITE_TITLE} />
        <meta name="twitter:image" content={SITE_IMAGE} />
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
