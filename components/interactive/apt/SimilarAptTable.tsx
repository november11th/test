import * as React from "react";
import styled from "@emotion/styled";
import { AptMeta, Option } from "../../../types/interactiveApt";

const TableContainer = styled.div``;
const TableHead = styled.div`
  width: 100%;
  grid-template-columns: 1fr 2fr 1fr 3fr;
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
  grid-template-columns: 1fr 2fr 1fr 3fr;
  justify-items: flex-start;
  align-content: center;
  height: 40px;

  font-size: 18px;
  line-height: 28px;
  font-weight: 400;

  &.emphasis {
    background-color: ${({ theme }) => theme.colors.pointEb};
    color: ${({ theme }) => theme.colors.white};
  }
  &.normal {
    background-color: ${({ theme }) => theme.colors.grayF4};
    &:nth-of-type(2n) {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;
const TableCell = styled.div`
  padding-left: 20px;

  &.clickable {
    cursor: pointer;
  }
`;

interface Props {
  data: AptMeta[];
  className?: string;
  onTablePress: (item: Option) => void;
}
const SimilarAptTable = ({ data, className, onTablePress }: Props) => {
  const columns = ["순위", "아파트명", "세대수", "주소"];

  return (
    <TableContainer className={className}>
      <TableHead>
        {columns.map((name, index) => (
          <TableCell key={index}>{name}</TableCell>
        ))}
      </TableHead>

      {data &&
        data.map((row, index) => (
          <TableBody
            className={index === 0 ? "emphasis" : "normal"}
            key={index}
          >
            <TableCell>{index === 0 ? `기준` : `${index}위`}</TableCell>
            <TableCell
              className={"clickable"}
              onClick={() => onTablePress({ title: row.name, id: row.id })}
            >
              {row.name}
            </TableCell>
            <TableCell>{row.householdsCount.toLocaleString()}세대</TableCell>
            <TableCell>{row.addr}</TableCell>
          </TableBody>
        ))}
    </TableContainer>
  );
};

export default SimilarAptTable;
