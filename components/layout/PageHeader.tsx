import React from "react";
import styled from "@emotion/styled";
import InnerContainerBase from "./InnerContainerBase";
import Image from "next/image";
import classNames from "classnames";

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  min-width: max-content;
  height: 550px;
  justify-content: center;

  &.dim {
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: "";

      background: linear-gradient(
        117.96deg,
        rgba(0, 0, 0, 0.7) 0.54%,
        rgba(0, 0, 0, 0) 100%
      );

      mix-blend-mode: normal;
      /* opacity: 0.5; */
      z-index: 0;
    }
  }
`;

const Inside = styled(InnerContainerBase)`
  background-color: transparent;
  z-index: 1;
`;

interface Props {
  imgUrl?: string;
  dim?: boolean;
  children: React.ReactNode;
  className?: string;
}

const PageHeader = ({ imgUrl, dim, children, className, ...props }: Props) => {
  return (
    <Container className={classNames({ dim: dim }, className)}>
      {imgUrl && (
        <Image
          src={imgUrl}
          layout={"fill"}
          objectFit={"cover"}
          priority={true}
          alt={"bg1"}
        />
      )}
      <Inside {...props}>{children}</Inside>
    </Container>
  );
};

export default PageHeader;
