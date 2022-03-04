import Document, { Html, Head, Main, NextScript } from "next/document";

const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

class MyDocument extends Document {
  render() {
    return (
      <Html lang={"ko"}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href={`${siteURL}/favicons/apple-touch-icon-57x57.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={`${siteURL}/favicons/apple-touch-icon-114x114.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={`${siteURL}/favicons/apple-touch-icon-72x72.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={`${siteURL}/favicons/apple-touch-icon-144x144.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={`${siteURL}/favicons/apple-touch-icon-60x60.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={`${siteURL}/favicons/apple-touch-icon-120x120.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={`${siteURL}/favicons/apple-touch-icon-76x76.png`}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={`${siteURL}/favicons/apple-touch-icon-152x152.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${siteURL}/favicons/favicon-196x196.png`}
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${siteURL}/favicons/favicon-96x96.png`}
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${siteURL}/favicons/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${siteURL}/favicons/favicon-16x16.png`}
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${siteURL}/favicons/favicon-128.png`}
            sizes="128x128"
          />
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
