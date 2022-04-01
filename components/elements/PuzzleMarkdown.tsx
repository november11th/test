import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import styled from "@emotion/styled";
import Text from "./Text";
import { theme } from "../../styles/theme";

const IMAGE_DEFAULT_SIZE = {
  width: 900,
  height: 605,
};

const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.36;
  letter-spacing: -0.4px;
`;

const H2 = styled.h2`
  font-size: 26px;
  font-weight: 700;
  line-height: 2.15;
  letter-spacing: -0.4px;
`;

const H3 = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: normal;
`;

const H4 = styled.h4`
  font-size: 22px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: normal;
`;

const H5 = styled.h5`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: normal;
`;

const H6 = styled.h6`
  font-size: 12px;
  font-weight: 300;
  line-height: 2;
  letter-spacing: normal;
`;

const P = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.56;
  letter-spacing: normal;
`;

const Li = styled.li`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.56;
  letter-spacing: normal;
`;

const Th = styled.th`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.56;
  letter-spacing: normal;
`;

const Td = styled.td<{ width: string }>`
  padding-left: 20px;
  padding-right: 20px;

  width: ${({ width }) => width};

  font-size: 18px;
  font-weight: 400;
  line-height: 1.56;
  letter-spacing: normal;
`;

const Table = styled.table`
  width: 100%;
`;

function getImageSizeFromElement(element: {
  properties: { alt: string; src: string };
}) {
  const [metaWidth = 0, metaHeight = 0] = element?.properties.alt.split(",");

  return {
    width: Number(metaWidth) || IMAGE_DEFAULT_SIZE.width,
    height: Number(metaHeight) || IMAGE_DEFAULT_SIZE.height,
  };
}

const Title = styled(Text)`
  margin-bottom: 8px;
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
        h5: (props) => (
          <div style={{ marginTop: "50px" }}>
            <Title type={"copy"} scale={"3"}>
              {props.children}
            </Title>
          </div>
        ),
        h6: (props) => (
          <div style={{ marginTop: "15px", marginBottom: "50px" }}>
            <Text type={"copy"} scale={"6"} color={theme.colors.gray8b}>
              {props.children}
            </Text>
          </div>
        ),
        li: (props) => <Li {...props} />,
        table: (props) => <Table {...props} />,
        th: (props) => <Th>{props.children}</Th>,
        td: (paragraph) => {
          const { node } = paragraph;

          const firstElement = node.children[0] as unknown;

          if ((firstElement as Element).tagName === "img") {
            const image = firstElement as {
              properties: { alt: string; src: string };
            };

            const { width, height } = getImageSizeFromElement(image);

            return (
              <Td width={`${width}px`}>
                <Image
                  src={image.properties.src}
                  width={width}
                  height={height}
                  alt={image.properties.alt}
                  layout={"responsive"}
                />
              </Td>
            );
          }
          return <Td width={"auto"}>{paragraph.children}</Td>;
        },
        p: (paragraph) => {
          const { node } = paragraph;

          const firstElement = node.children[0] as unknown;

          if ((firstElement as Element).tagName === "img") {
            const image = firstElement as {
              properties: { alt: string; src: string };
            };

            const { width, height } = getImageSizeFromElement(image);

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
