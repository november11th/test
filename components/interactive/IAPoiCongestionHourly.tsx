import SearchInput from "./common/SearchInput";
import Container from "./common/Container";
import ContainerDesc from "./common/ContainerDesc";
import ContainerInput from "./common/ContainerInput";
import CongestionHourly from "./poi/congestionHourly";
import {
  CongestionHourlyStat,
  PoiMeta,
  Option,
} from "../../types/interactivePoi";
import { InteractiveText } from "../../types/insight";

interface Props {
  text: InteractiveText;
  metaData: PoiMeta;
  congestionData: CongestionHourlyStat[];
  options: Option[];
  selectedItem: Option;
  setSelectedItem: Function;
  onButtonPress: () => void;
}

const IAPoiCongestionHourly = ({
  text,
  metaData,
  congestionData,
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
      <CongestionHourly
        congestionData={congestionData}
        metaData={metaData}
        footnoteHref={footnoteHref}
      />
    </Container>
  );
};

export default IAPoiCongestionHourly;
