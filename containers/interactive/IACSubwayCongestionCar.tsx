import { useState } from "react";
import IASubwayCongestionCar from "../../components/interactive/IASubwayCongestionCar";
import PuzzleLoading from "../../components/elements/loading/PuzzleLoading";
import FailedToLoad from "../../components/interactive/common/FailedToLoad";
import { useCongestionCarQuery } from "../../hooks/query/subway/useCongestionCarQuery";
import { useOptionsQuery } from "../../hooks/query/subway/useOptionsQuery";
import { interactiveDescText } from "../../temp_data/insight";

const IACSubwayCongestionCar = () => {
  const text = interactiveDescText.subwayCongestionCar;
  const [calledItem, setCalledItem] = useState(text.defaultOption);
  const [selectedItem, setSelectedItem] = useState(text.defaultOption);

  const { data, error: dataError } = useCongestionCarQuery(calledItem.title);
  const { options, error: optionsError } = useOptionsQuery();

  if (dataError || optionsError) return <FailedToLoad />;
  if (!data || !options) return <PuzzleLoading />;

  return (
    <IASubwayCongestionCar
      text={text}
      data={data}
      options={options}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      onButtonPress={() => setCalledItem(selectedItem)} // 검색창에 선택된 항목을 api call
    />
  );
};

export default IACSubwayCongestionCar;
