import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import Button from "../elements/Button";
import InnerContainerBase from "../InnerContainerBase";
import WhatWeHaveItem from "./WhatWeHaveItem";

const InnerContainer = styled(InnerContainerBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 120px;
`;
const Bar = styled.div`
  width: 180px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.black};
`;
const MainMessage = styled.p`
  white-space: pre-line;
  font-size: 32px;
  font-weight: bold;
`;
const GridContainer = styled.div<{ grid_cols_count: number }>`
  margin-top: 120px;
  margin-bottom: 120px;
  display: grid;
  gap: 50px;
  row-gap: 100px;
  justify-content: stretch;
  grid-template-columns: ${({ grid_cols_count }) =>
    `repeat(${grid_cols_count}, minmax(0, 1fr))`};
`;
const StyledButton = styled(Button)`
  width: 340px;
  height: 72px;
`;

type Item = {
  imgSrc: string;
  title: string;
  desc: string;
};

interface Props {
  itemList: Item[];
}

const WhatWeHave = ({ itemList }: Props) => {
  const router = useRouter();
  const onPress = () => {
    router.push("/request");
  };

  return (
    <InnerContainer>
      <Bar />
      <MainMessage>{`What We have`}</MainMessage>
      <GridContainer grid_cols_count={3}>
        {itemList.map((item, index) => (
          <WhatWeHaveItem
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </GridContainer>
      <StyledButton
        color="blue"
        size={"l"}
        text={"데이터 요청하기"}
        onPress={onPress}
      />
    </InnerContainer>
  );
};

export default WhatWeHave;
