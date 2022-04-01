import { useState } from "react";
import PuzzleLoading from "../../components/elements/loading/PuzzleLoading";
import FailedToLoad from "../../components/interactive/common/FailedToLoad";
import IATravelTravelerDaily from "../../components/interactive/IATravelTravelerDaily";
import useTravelerDailyQuery from "../../hooks/query/travel/useTravelerDailyQuery";
import useOptionsQuery from "../../hooks/query/travel/useOptionsQuery";
import { interactiveDescText } from "../../temp_data/insight";

const IACTravelTravelerDaily = () => {
  const text = interactiveDescText.travelTravelerDaily;
  const [calledItem, setCalledItem] = useState(text.defaultOption);
  const [selectedItem, setSelectedItem] = useState(text.defaultOption);

  /* 데이터 호출 */
  const { options, error: optionsError } = useOptionsQuery();
  const { data: data, error: dataError } = useTravelerDailyQuery(
    calledItem.districtCode
  );

  /* API 응답 결과에 따라 */
  if (optionsError && dataError) return <FailedToLoad />;
  if (!options || !data) return <PuzzleLoading />;

  return (
    <IATravelTravelerDaily
      text={text}
      data={data}
      options={options}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      onButtonPress={() => setCalledItem(selectedItem)}
    />
  );
};

export default IACTravelTravelerDaily;
