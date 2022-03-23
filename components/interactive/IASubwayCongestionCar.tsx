import React from "react";
import Container from "./common/Container";
import ContainerDesc from "./common/ContainerDesc";
import ContainerInput from "./common/ContainerInput";
import SearchInput from "./common/SearchInput";
import CongestionCar from "./subway/CongestionCar";
import { CongestionCarStat, Option } from "../../types/interactiveSubway";
import { InteractiveText } from "../../types/insight";

interface Props {
  text: InteractiveText;
  data: CongestionCarStat[];
  options: Option[];
  selectedItem: Option;
  setSelectedItem: Function;
  onButtonPress: () => void;
}

const IASubwayCongestionCar = ({
  text,
  data,
  options,
  selectedItem,
  setSelectedItem,
  onButtonPress,
}: Props) => {
  return (
    <Container>
      <ContainerDesc text={text.desc} />
      <ContainerInput>
        <SearchInput
          placeholder={text.placeholder}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          options={options}
          onButtonPress={onButtonPress}
        />
        {/* <SubwayLineSelector
          list={["1", "2"]}
          selectedIndex={selectedLineIndex}
          setIndex={setSelectedLine}
        /> */}
      </ContainerInput>
      <CongestionCar data={data} footnoteHref={text.footnoteHref} />
    </Container>
  );
};

export default IASubwayCongestionCar;
