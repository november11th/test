import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import styled from "@emotion/styled";

const IMAGE_DEFAULT_SIZE = {
  width: 900,
  height: 605,
};

const H1 = styled.h1`
  font-size: 28px;
`;

const H2 = styled.h2`
  font-size: 26px;
`;

const H3 = styled.h3`
  font-size: 24px;
`;

const H4 = styled.h4`
  font-size: 22px;
`;

const H5 = styled.h5`
  font-size: 16px;
`;

const H6 = styled.h6`
  font-size: 12px;
`;

const P = styled.p`
  font-size: 18px;
`;

interface Props {
  text: string;
}

const PuzzleMarkdown = ({ text }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: (props) => <H1 {...props} />,
        h2: (props) => <H2 {...props} />,
        h3: (props) => <H3 {...props} />,
        h4: (props) => <H4 {...props} />,
        h5: (props) => <H5 {...props} />,
        h6: (props) => <H6 {...props} />,
        p: (paragraph) => {
          const { node } = paragraph;

          const firstElement = node.children[0] as unknown;

          if ((firstElement as Element).tagName === "img") {
            const image = firstElement as {
              properties: { alt: string; src: string };
            };

            const [metaWidth = 0, metaHeight = 0] =
              image?.properties.alt.split(",");

            const width = Number(metaWidth) || IMAGE_DEFAULT_SIZE.width;
            const height = Number(metaHeight) || IMAGE_DEFAULT_SIZE.height;
            return (
              <Image
                src={image.properties.src}
                width={width}
                height={height}
                alt={image.properties.alt}
              />
            );
          }
          return <P>{paragraph.children}</P>;
        },
      }}
    >
      {text}
    </ReactMarkdown>
  );
};

export default PuzzleMarkdown;
