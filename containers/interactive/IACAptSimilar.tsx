import { useState } from "react";
import PuzzleLoading from "../../components/elements/loading/PuzzleLoading";
import FailedToLoad from "../../components/interactive/common/FailedToLoad";
import IAAptSimilar from "../../components/interactive/IAAptSimilar";
import { useAptSimilarQuery } from "../../hooks/query/apt/useAptSimilarQuery";
import { useAptMetaQuery } from "../../hooks/query/apt/useAptMetaQuery";
import { Option } from "../../types/interactiveApt";
import { options } from "../../temp_data/interactiveApt";
import { interactiveDescText } from "../../temp_data/insight";

const IACAptSimilar = () => {
  const text = interactiveDescText.aptSimilar;
  const [calledItem, setCalledItem] = useState(text.defaultOption);
  const [selectedItem, setSelectedItem] = useState(text.defaultOption);

  /* 테이블 클릭했을 때 새로 호출하는 함수 */
  const onTablePress = (item: Option) => setCalledItem(item);

  /* 데이터 호출 */
  const { data: selectedData, error: selectedError } = useAptMetaQuery(
    calledItem.id
  );
  const { data: similarData, error: similarError } = useAptSimilarQuery(
    calledItem.id
  );
  const data = { selected: selectedData, similar: similarData }; // 데이터 결합

  /* API 응답 결과에 따라 */
  if (selectedError && similarError) return <FailedToLoad />;
  if (!selectedData || !similarData) return <PuzzleLoading />;

  return (
    <IAAptSimilar
      text={text}
      data={data}
      options={options}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      onButtonPress={() => setCalledItem(selectedItem)} // 검색창에 선택된 항목을 api call
      onTablePress={onTablePress}
    />
  );
};

export default IACAptSimilar;
