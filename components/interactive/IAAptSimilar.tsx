import SearchInput from "./common/SearchInput";
import Container from "./common/Container";
import ContainerDesc from "./common/ContainerDesc";
import ContainerInput from "./common/ContainerInput";
import SimilarApt from "./apt/SimilarApt";
import { InteractiveText } from "../../types/insight";
import { AptSimilarStat, Option } from "../../types/interactiveApt";

interface Props {
  text: InteractiveText;
  data: AptSimilarStat;
  options: Option[];
  selectedItem: Option;
  setSelectedItem: Function;
  onButtonPress: () => void;
  onTablePress: (item: Option) => void;
}

const IAAptSimilar = ({
  text,
  data,
  options,
  selectedItem,
  setSelectedItem,
  onButtonPress,
  onTablePress,
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

      <SimilarApt
        data={data}
        footnoteHref={text.footnoteHref}
        onTablePress={onTablePress}
      />
    </Container>
  );
};

export default IAAptSimilar;
