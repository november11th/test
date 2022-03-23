import { useEffect, useState } from "react";
import SearchInput from "./common/SearchInput";
import Container from "./common/Container";
import ContainerDesc from "./common/ContainerDesc";
import ContainerInput from "./common/ContainerInput";
import TravelerDaily from "./travel/TravelerDaily";
import { travelerDailyData } from "../../temp_data/interactiveTravel";

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

const IATravelTravelerDaily = () => {
  const [selectedItem, setSelectedItem] = useState({
    title: "제주특별자치도 제주시",
  });

  return (
    <Container>
      <ContainerDesc
        text={`검색한 여행지의 최근 2주간 일별 여행자 수와 총 국내 여행자 수 트렌드를 비교하여 볼 수 있습니다.\n(여행지는 시군구 단위로 검색이 가능합니다.)`}
      />
      <ContainerInput>
        <SearchInput
          placeholder={"(시군구단위) 여행지를 입력해주세요."}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          options={options}
          onButtonPress={() => {
            console.log("gogo");
          }}
        />
      </ContainerInput>
      <TravelerDaily data={travelerDailyData} />
    </Container>
  );
};

export default IATravelTravelerDaily;
