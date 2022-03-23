import { useEffect, useState } from "react";
import SearchInput from "./common/SearchInput";
import Container from "./common/Container";
import ContainerDesc from "./common/ContainerDesc";
import ContainerInput from "./common/ContainerInput";
import PopularEmdRi from "./travel/PopularEmdRi";
import { popularEmdRiData } from "../../temp_data/interactiveTravel";

const options = [
  { title: "제주특별자치도 제주시" },
  { title: "제주특별자치도 서귀포시" },
  { title: "강원도 강릉시" },
  { title: "강원도 속초시" },
  { title: "부산광역시 해운대구" },
  { title: "경상남도 거제시" },
  { title: "경상남도 통영시" },
  { title: "서울특별시 종로구" },
];

const IATravelPopularEmdRi = () => {
  const [selectedItem, setSelectedItem] = useState({
    title: "서울특별시 종로구",
  });
  const [options_, setOptions_] = useState([{ title: "" }]);

  useEffect(() => setOptions_(options), [options]);

  return (
    <Container>
      <ContainerDesc
        text={`입력한 여행지 내에서 여행자수 기준 많이 방문하는 지역(동/리) Top5와 평균 방문 시간을 알 수 있습니다.`}
      />
      <ContainerInput>
        <SearchInput
          placeholder={"(시군구단위) 여행지를 입력해주세요."}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          options={options_}
          onButtonPress={() => {
            console.log("gogo");
          }}
        />
      </ContainerInput>
      <PopularEmdRi data={popularEmdRiData.riList} />
    </Container>
  );
};

export default IATravelPopularEmdRi;
