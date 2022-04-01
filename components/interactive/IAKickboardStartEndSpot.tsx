import SearchInput from "./common/SearchInput";
import Container from "./common/Container";
import ContainerDesc from "./common/ContainerDesc";
import ContainerInput from "./common/ContainerInput";
import PopularStartEndSpot from "./kickboard/PopularStartEndSpot";
import { InteractiveText } from "../../types/insight";

interface Props {
  text: InteractiveText;
  data: any;
  options: any[];
  selectedItem: any;
  setSelectedItem: Function;
  onButtonPress: () => void;
}

const IAKickboardStartEndSpot = ({
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

      <PopularStartEndSpot data={data} footnoteHref={footnoteHref} />
    </Container>
  );
};

export default IAKickboardStartEndSpot;
