import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const MenuItemWrapper = styled.div`
  margin-bottom: 20px;
`;

interface Props {
  link: string;
  children: React.ReactNode;
}

const MenuItem = ({ link, children }: Props) => {
  return (
    <MenuItemWrapper>
      <Link href={link} passHref>
        <a>{children}</a>
      </Link>
    </MenuItemWrapper>
  );
};

export default MenuItem;
