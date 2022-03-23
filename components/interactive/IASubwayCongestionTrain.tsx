import React from "react";
import SearchInput from "./common/SearchInput";
import Container from "./common/Container";
import ContainerDesc from "./common/ContainerDesc";
import ContainerInput from "./common/ContainerInput";
import CongestionTrain from "./subway/CongestionTrain";
import { congestionTrainStatData } from "../../temp_data/interactiveSubway";
import { CongestionTrainStat, Option } from "../../types/interactiveSubway";
import { InteractiveText } from "../../types/insight";

interface Props {
  text: InteractiveText;
  data: CongestionTrainStat;
  options: Option[];
  selectedItem: Option;
  setSelectedItem: Function;
  onButtonPress: () => void;
}

const IASubwayCongestionTrain = ({
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
      </ContainerInput>
      <CongestionTrain data={data} footnoteHref={text.footnoteHref} />
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {
      data: congestionTrainStatData,
    },
  };
}

export default IASubwayCongestionTrain;
