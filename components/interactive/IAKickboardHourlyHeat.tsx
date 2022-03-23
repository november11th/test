import { useState } from "react";
import SearchInput from "./common/SearchInput";
import Container from "./common/Container";
import ContainerDesc from "./common/ContainerDesc";
import ContainerInput from "./common/ContainerInput";
import HourlyHeat from "./kickboard/HourlyHeat";
import { hourlyHeatData } from "../../temp_data/interactiveKickboard";

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

const IAKickboardHourlyHeat = () => {
  const [selectedItem, setSelectedItem] = useState({
    title: "서울특별시 강남구",
  });
  const [selectedIndex, setSelectedIndex] = useState("0");
  return (
    <Container>
      <ContainerDesc
        text={`검색한 지역구에서 공유 킥보드로 많이 이동한 위치를 보여드립니다.\n평일과 주말 각각 이용자들이 어디서 운행을 많이 하는지 확인해보세요.\n(공유 킥보드 운행 건이 충분히 확보되지 못한 지역구는 검색이 제한될 수 있습니다.)`}
      />
      <ContainerInput>
        <SearchInput
          placeholder={"지역구 명을 입력해주세요."}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          options={options}
          onButtonPress={() => {
            console.log("gogo");
          }}
        />
      </ContainerInput>

      <HourlyHeat data={hourlyHeatData} />
    </Container>
  );
};

export default IAKickboardHourlyHeat;
