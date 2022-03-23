import * as React from "react";
import styled from "@emotion/styled";
import { makeEmdRiName } from "../../../utils/interactiveTravel";
import { secondToDuration } from "../../../utils/common";

const TableContainer = styled.div``;
const TableHead = styled.div`
  width: 100%;
  row-gap: 20px;
  grid-template-columns: 1fr 2fr 2fr;
  background-color: ${({ theme }) => theme.colors.grayEa};
  display: grid;
  height: 40px;
  justify-items: flex-start;
  align-content: center;

  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
`;
const TableBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  row-gap: 20px;
  justify-items: flex-start;
  align-content: center;
  height: 40px;

  font-size: 18px;
  line-height: 28px;
  font-weight: 400;

  background-color: ${({ theme }) => theme.colors.grayF4};
  &:nth-of-type(2n) {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
const TableCell = styled.div`
  padding-left: 20px;
`;

interface Props {
  data: any[] | null;
  className?: string;
}
const PopularEmdRiTable = ({ data, className }: Props) => {
  const columns = ["순위", "방문지명", "평균 방문 시간"];

  return (
    <TableContainer className={className}>
      <TableHead>
        {columns.map((name, index) => (
          <TableCell key={index}>{name}</TableCell>
        ))}
      </TableHead>

      {data &&
        data.map((row, index) => (
          <TableBody key={index}>
            <TableCell>{row.ranking}위</TableCell>
            <TableCell>{makeEmdRiName(row.emdName, row.riName)}</TableCell>
            <TableCell>
              {secondToDuration(row.averageVisitDuration, "HHMM")}
            </TableCell>
          </TableBody>
        ))}
    </TableContainer>
  );
};

export default PopularEmdRiTable;
