import { DefaultSeoProps } from "next-seo";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

const APP_DEFAULT_SEO: DefaultSeoProps = {
  defaultTitle: "Puzzle",
  titleTemplate: "%s | Puzzle",
  description: "퍼즐, 세상에 가치를 더하는 SK텔레콤 데이터 서비스",
  defaultOpenGraphImageWidth: 640,
  defaultOpenGraphImageHeight: 320,
  canonical: "www.data-puzzle.com",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/site_image.png`,
        width: 640,
        height: 320,
        alt: "Puzzle",
        type: "image/jpeg",
      },
    ],
    site_name: "Puzzle",
  },
  twitter: {
    handle: "@Puzzle",
    site: "@data-puzzle",
    cardType: "summary_large_image",
  },
};

export default APP_DEFAULT_SEO;
