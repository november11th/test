import React from "react";
import styled from "@emotion/styled";

import { CardData } from "../types/cardData";
import ProjectJoinCard from "./intro/ProjectJoinCard";
import CardUnit from "./card/CardUnit";

const GridContainer = styled.div<{ grid_cols_count: number }>`
  display: grid;
  row-gap: 20px;
  grid-template-columns: ${({ grid_cols_count }) =>
    `repeat(${grid_cols_count}, minmax(0, 1fr))`};
`;

interface Props {
  dataList: CardData[];
  gridColsCount?: number;
  isMain?: boolean;
}

const CardList = ({
  dataList = [],
  gridColsCount = 4,
  isMain = false,
}: Props) => {
  return (
    <GridContainer grid_cols_count={gridColsCount}>
      {dataList.map((data, index) => (
        <React.Fragment key={index}>
          <CardUnit data={data} />
          {isMain && index === 3 && <ProjectJoinCard />}
        </React.Fragment>
      ))}
    </GridContainer>
  );
};

export default CardList;
