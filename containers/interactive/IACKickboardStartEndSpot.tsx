import { useState } from "react";
import PuzzleLoading from "../../components/elements/loading/PuzzleLoading";
import FailedToLoad from "../../components/interactive/common/FailedToLoad";
import IAKickboardStartEndSpot from "../../components/interactive/IAKickboardStartEndSpot";
import useOptionsQuery from "../../hooks/query/kickboard/useOptionsQuery";
import useStartEndSpotQuery from "../../hooks/query/kickboard/useStartEndSpotQuery";
import { interactiveDescText } from "../../temp_data/insight";

const IACKickboardStartEndSpot = () => {
  const text = interactiveDescText.kickboardStartEndSpot;
  const [calledItem, setCalledItem] = useState(text.defaultOption);
  const [selectedItem, setSelectedItem] = useState(text.defaultOption);

  /* 데이터 호출 */
  const { options, error: optionsError } = useOptionsQuery();
  const { data: data_, error: dataError } = useStartEndSpotQuery(
    calledItem.sigCode
  );

  /* API 응답 결과에 따라 */
  if (optionsError && dataError) return <FailedToLoad />;
  if (!options || !data_) return <PuzzleLoading />;

  /* 킥보드 데이터에 districtName이 없어서 추가 */
  const data = { districtName: calledItem.title, ...data_ };

  return (
    <IAKickboardStartEndSpot
      text={text}
      data={data}
      options={options}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      onButtonPress={() => setCalledItem(selectedItem)} // 검색창에 선택된 항목을 api call
    />
  );
};

export default IACKickboardStartEndSpot;
