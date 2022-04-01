import { useState } from "react";
import PuzzleLoading from "../../components/elements/loading/PuzzleLoading";
import FailedToLoad from "../../components/interactive/common/FailedToLoad";
import IATravelPopularEmdr from "../../components/interactive/IATravelPopularEmdr";
import usePopularEmdrQuery from "../../hooks/query/travel/usePopularEmdrQuery";
import useOptionsQuery from "../../hooks/query/travel/useOptionsQuery";
import { interactiveDescText } from "../../temp_data/insight";

const IACTravelPopularEmdr = () => {
  const text = interactiveDescText.travelPopularEmdr;
  const [calledItem, setCalledItem] = useState(text.defaultOption);
  const [selectedItem, setSelectedItem] = useState(text.defaultOption);

  /* 데이터 호출 */
  const { options, error: optionsError } = useOptionsQuery();
  const { data: data, error: dataError } = usePopularEmdrQuery(
    calledItem.districtCode
  );

  /* API 응답 결과에 따라 */
  if (optionsError && dataError) return <FailedToLoad />;
  if (!options || !data) return <PuzzleLoading />;

  return (
    <IATravelPopularEmdr
      text={text}
      data={data}
      options={options}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      onButtonPress={() => setCalledItem(selectedItem)}
    />
  );
};

export default IACTravelPopularEmdr;
