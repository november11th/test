import SearchInput from "./common/SearchInput";
import Container from "./common/Container";
import ContainerDesc from "./common/ContainerDesc";
import ContainerInput from "./common/ContainerInput";
import TravelerDaily from "./travel/TravelerDaily";
import { InteractiveText } from "../../types/insight";

interface Props {
  text: InteractiveText;
  data: any;
  options: any[];
  selectedItem: any;
  setSelectedItem: Function;
  onButtonPress: () => void;
}

const IATravelTravelerDaily = ({
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
      <TravelerDaily data={data} footnoteHref={footnoteHref} />
    </Container>
  );
};

export default IATravelTravelerDaily;
