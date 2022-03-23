import { useState } from "react";
import styled from "@emotion/styled";
import SearchInput from "./common/SearchInput";
import Container from "./common/Container";
import ContainerDesc from "./common/ContainerDesc";
import ContainerInput from "./common/ContainerInput";
import PopularStartEndSpot from "./kickboard/PopularStartEndSpot";
import { popularStartSpotData } from "../../temp_data/interactiveKickboard";

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

const IAKickboardStartEndSpot = () => {
  const [selectedItem, setSelectedItem] = useState({
    title: "서울특별시 종로구",
  });

  return (
    <Container>
      <ContainerDesc
        text={`검색한 지역구에서 공유 킥보드 이용자들이 가장 많이 승차 또는 하차하는 장소를 보여드립니다.\n(공유 킥보드 운행 건이 충분히 확보되지 못한 지역구는 검색이 제한될 수 있습니다.)`}
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

      <PopularStartEndSpot data={popularStartSpotData} />
    </Container>
  );
};

export default IAKickboardStartEndSpot;
