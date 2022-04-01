import { useState } from "react";
import IASubwayCongestionTrain from "../../components/interactive/IASubwayCongestionTrain";
import PuzzleLoading from "../../components/elements/loading/PuzzleLoading";
import FailedToLoad from "../../components/interactive/common/FailedToLoad";
import { useCongestionTrainQuery } from "../../hooks/query/subway/useCongestionTrainQuery";
import { useOptionsQuery } from "../../hooks/query/subway/useOptionsQuery";
import { interactiveDescText } from "../../temp_data/insight";

const IACSubwayCongestionTrain = () => {
  const text = interactiveDescText.subwayCongestionTrain;
  const [calledItem, setCalledItem] = useState(text.defaultOption);
  const [selectedItem, setSelectedItem] = useState(text.defaultOption);

  const { data, error: dataError } = useCongestionTrainQuery(calledItem.title);
  const { options, error: optionsError } = useOptionsQuery();

  if (dataError || optionsError) return <FailedToLoad />;
  if (!data || !options) return <PuzzleLoading />;

  return (
    <IASubwayCongestionTrain
      text={text}
      data={data}
      options={options}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      onButtonPress={() => setCalledItem(selectedItem)} // 검색창에 선택된 항목을 api call
    />
  );
};

export default IACSubwayCongestionTrain;
