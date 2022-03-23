import styled from "@emotion/styled";
import AboutMenuItem from "./AboutMenuItem";

const GridContainer = styled.div<{ grid_cols_count: number }>`
  display: grid;
  column-gap: 100px;
  justify-content: stretch;
  grid-template-columns: ${({ grid_cols_count }) =>
    `repeat(${grid_cols_count}, minmax(0, 1fr))`};
`;

type Item = {
  title: string;
  desc: string;
  buttonText: string;
  buttonURL: string;
  disabled: boolean;
};

interface Props {
  itemList: Item[];
  className?: string;
}

const AboutMenu = ({ itemList, className }: Props) => {
  return (
    <GridContainer grid_cols_count={3} className={className}>
      {itemList.map((item, index) => (
        <AboutMenuItem
          key={index}
          title={item.title}
          desc={item.desc}
          buttonText={item.buttonText}
          buttonURL={item.buttonURL}
          disabled={item.disabled}
        />
      ))}
    </GridContainer>
  );
};

export default AboutMenu;
