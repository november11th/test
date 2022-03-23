import Document, { Html, Head, Main, NextScript } from "next/document";
import { SITE_URL } from "../assets/common_texts";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={"ko"}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href={`${SITE_URL}/favicons/apple-touch-icon-57x57.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={`${SITE_URL}/favicons/apple-touch-icon-114x114.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={`${SITE_URL}/favicons/apple-touch-icon-72x72.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={`${SITE_URL}/favicons/apple-touch-icon-144x144.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={`${SITE_URL}/favicons/apple-touch-icon-60x60.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={`${SITE_URL}/favicons/apple-touch-icon-120x120.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={`${SITE_URL}/favicons/apple-touch-icon-76x76.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={`${SITE_URL}/favicons/apple-touch-icon-152x152.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${SITE_URL}/favicons/favicon-196x196.png`}
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${SITE_URL}/favicons/favicon-96x96.png`}
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${SITE_URL}/favicons/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${SITE_URL}/favicons/favicon-16x16.png`}
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${SITE_URL}/favicons/favicon-128.png`}
            sizes="128x128"
          />
          {/*<script src="https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=l7xxd6d5ad513e30401db8081301d0630c51" />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
