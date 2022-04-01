import { useState } from "react";
import PuzzleLoading from "../../components/elements/loading/PuzzleLoading";
import FailedToLoad from "../../components/interactive/common/FailedToLoad";
import IAKickboardHourlyHeat from "../../components/interactive/IAKickboardHourlyHeat";
import useHourlyHeatQuery from "../../hooks/query/kickboard/useHourlyHeatQuery";
import useOptionsQuery from "../../hooks/query/kickboard/useOptionsQuery";
import { interactiveDescText } from "../../temp_data/insight";

const IACKickboardHourlyHeat = () => {
  const text = interactiveDescText.kickboardHourlyHeat;
  const [calledItem, setCalledItem] = useState(text.defaultOption);
  const [selectedItem, setSelectedItem] = useState(text.defaultOption);

  /* 데이터 호출 */
  const { options, error: optionsError } = useOptionsQuery();
  const { data: data_, error: dataError } = useHourlyHeatQuery(
    calledItem.sigCode
  );

  /* API 응답 결과에 따라 */
  if (optionsError && dataError) return <FailedToLoad />;
  if (!options || !data_) return <PuzzleLoading />;

  /* 킥보드 데이터에 districtName이 없어서 추가 */
  const data = { districtName: calledItem.title, ...data_ };

  return (
    <IAKickboardHourlyHeat
      text={text}
      data={data}
      options={options}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      onButtonPress={() => setCalledItem(selectedItem)} // 검색창에 선택된 항목을 api call
    />
  );
};

export default IACKickboardHourlyHeat;
