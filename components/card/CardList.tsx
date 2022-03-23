import React from "react";
import styled from "@emotion/styled";
import { CardData } from "../../types/cardData";
import CardUnit from "./CardUnit";
import ProjectJoinCard from "../intro/ProjectJoinCard";

const GridContainer = styled.div<{ grid_cols_count: number }>`
  display: grid;
  row-gap: 21px;
  column-gap: 26.6px;
  grid-template-columns: ${({ grid_cols_count }) =>
    `repeat(${grid_cols_count}, minmax(0, 1fr))`};
`;

interface Props {
  dataList: CardData[];
  gridColsCount?: number;
  afterComponent?: React.ReactNode;
}

const CardList = ({
  dataList = [],
  gridColsCount = 4,
  afterComponent = <ProjectJoinCard />,
}: Props) => {
  return (
    <GridContainer grid_cols_count={gridColsCount}>
      {dataList.map((data, index) => (
        <React.Fragment key={index}>
          <CardUnit data={data} />
        </React.Fragment>
      ))}
      {afterComponent && afterComponent}
    </GridContainer>
  );
};

export default CardList;
