import React from "react";
import styled from "@emotion/styled";

const GridContainer = styled.div<{ grid_cols_count: number }>`
  display: grid;
  row-gap: 26.6px;
  column-gap: 26.6px;
  grid-template-columns: ${({ grid_cols_count }) =>
    `repeat(${grid_cols_count}, minmax(0, 1fr))`};
`;

interface Props {
  gridColsCount?: number;
  children: React.ReactNode;
}

const CardGrid = ({ gridColsCount = 4, children }: Props) => {
  return (
    <GridContainer grid_cols_count={gridColsCount}>{children}</GridContainer>
  );
};

export default CardGrid;
