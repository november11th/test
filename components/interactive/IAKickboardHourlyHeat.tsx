import { useState } from "react";
import SearchInput from "./common/SearchInput";
import Container from "./common/Container";
import ContainerDesc from "./common/ContainerDesc";
import ContainerInput from "./common/ContainerInput";
import HourlyHeat from "./kickboard/HourlyHeat";
import { hourlyHeatData } from "../../temp_data/interactiveKickboard";
import { InteractiveText } from "../../types/insight";

interface Props {
  text: InteractiveText;
  data: any;
  options: any[];
  selectedItem: any;
  setSelectedItem: Function;
  onButtonPress: () => void;
}

const IAKickboardHourlyHeat = ({
  text,
  data,
  options,
  selectedItem,
  setSelectedItem,
  onButtonPress,
}: Props) => {
  const { desc, placeholder, footnoteHref } = text;

  return (
    <Container>
      <ContainerDesc text={desc} />
      <ContainerInput>
        <SearchInput
          placeholder={placeholder}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          options={options}
          onButtonPress={onButtonPress}
        />
      </ContainerInput>

      <HourlyHeat data={data} footnoteHref={footnoteHref} />
    </Container>
  );
};

export default IAKickboardHourlyHeat;
