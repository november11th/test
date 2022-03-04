import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import { Banner } from "../../types/banner";

const ImageContainer = styled(Image)`
  border-radius: 18px;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`;

const TextSubject = styled.span`
  font-size: 22px;
  font-weight: 600;
  line-height: 1;
  color: #fff;
  text-transform: uppercase;
`;

const TextTitle = styled.strong`
  display: block;
  margin-top: 32px;
  padding-right: 35%;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.7px;
  color: white;
`;

type Props = Partial<Banner>;

const IntroBannerItem = ({
  src = "/",
  link = "/",
  title = "",
  category = "",
}: Props) => {
  return (
    <Link href={link}>
      <a>
        <ImageContainer
          src={src}
          width={621}
          height={739}
          layout={"responsive"}
          priority={true}
          alt={title ?? ""}
        />
        <TextWrapper>
          <TextSubject>{category}</TextSubject>
          <TextTitle>{title}</TextTitle>
        </TextWrapper>
      </a>
    </Link>
  );
};

export default IntroBannerItem;
