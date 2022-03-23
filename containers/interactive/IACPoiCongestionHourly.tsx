import { useState } from "react";
import IAPoiCongestionHourly from "../../components/interactive/IAPoiCongestionHourly";
import PuzzleLoading from "../../components/elements/loading/PuzzleLoading";
import { useCongestionHourlyQuery } from "../../hooks/query/poi/useCongestionHourlyQuery";
import { options } from "../../temp_data/interactivePoi";
import { interactiveDescText } from "../../temp_data/insight";
import { usePoiMetaQuery } from "../../hooks/query/poi/usePoiMetaQuery";

const IACPoiCongestionHourly = () => {
  const text = interactiveDescText.poiCongestionHourly;
  const [calledItem, setCalledItem] = useState(text.defaultOption);
  const [selectedItem, setSelectedItem] = useState(text.defaultOption);

  const { data: congestionData, error: congestionDataError } =
    useCongestionHourlyQuery(calledItem.poiId);
  const { data: metaData, error: metaDataError } = usePoiMetaQuery(
    calledItem.poiId
  );

  if (metaDataError || congestionDataError) return <div>Failed to load</div>;
  if (!metaData || !congestionData) return <PuzzleLoading />;

  return (
    <IAPoiCongestionHourly
      text={text}
      metaData={metaData}
      congestionData={congestionData}
      options={options}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      onButtonPress={() => setCalledItem(selectedItem)} // 검색창에 선택된 항목을 api call
    />
  );
};

export default IACPoiCongestionHourly;
