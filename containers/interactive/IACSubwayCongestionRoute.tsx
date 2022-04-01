import { useState } from "react";
import IASubwayCongestionRoute from "../../components/interactive/IASubwayCongestionRoute";
import PuzzleLoading from "../../components/elements/loading/PuzzleLoading";
import FailedToLoad from "../../components/interactive/common/FailedToLoad";
import { useCongestionRouteQuery } from "../../hooks/query/subway/useCongestionRouteQuery";
import { useOptionsQuery } from "../../hooks/query/subway/useOptionsQuery";
import { interactiveDescText } from "../../temp_data/insight";

const IACSubwayCongestionRoute = () => {
  const text = interactiveDescText.subwayCongestionRoute;
  const [calledItem, setCalledItem] = useState(text.defaultOption);
  const [selectedItem, setSelectedItem] = useState(text.defaultOption);

  const { data, error: dataError } = useCongestionRouteQuery(calledItem.title);
  const { options, error: optionsError } = useOptionsQuery();

  if (dataError || optionsError) return <FailedToLoad />;
  if (!data || !options) return <PuzzleLoading />;

  return (
    <IASubwayCongestionRoute
      text={text}
      data={data}
      options={options}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      onButtonPress={() => setCalledItem(selectedItem)} // 검색창에 선택된 항목을 api call
    />
  );
};

export default IACSubwayCongestionRoute;
