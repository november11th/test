import { useState } from "react";
import styled from "@emotion/styled";
import SearchInput from "./common/SearchInput";
import Container from "./common/Container";
import ContainerDesc from "./common/ContainerDesc";
import ContainerInput from "./common/ContainerInput";
import SimilarApt from "./apt/SimilarApt";
import { aptSimilarData } from "../../temp_data/interactiveApt";

const options = [
  { title: "마포래미안푸르지오" },
  { title: "마포삼성3차" },
  { title: "센트라스" },
  { title: "텐즈힐" },
  { title: "무악한신아파트" },
  { title: "한남힐스테이트" },
  { title: "여의도삼부" },
  { title: "송파동부센트레빌" },
];

const IAAptSimilar = () => {
  const [selectedItem, setSelectedItem] = useState({
    title: "송파동부센트레빌",
  });

  return (
    <Container>
      <ContainerDesc
        text={`검색한 아파트와 거주자 특징, 라이프스타일이 비슷한 상위 5개 아파트를 보여드립니다.\n지도 위에 표시된 아파트 목록과 아파트별 특징이 담긴 태그도 함께 확인해보세요.\n(모수 불충분 등으로 집계가 불가능한 일부 아파트의 경우 검색이 제한될 수 있습니다.)`}
      />
      <ContainerInput>
        <SearchInput
          placeholder={"아파트를 입력해주세요."}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          options={options}
          onButtonPress={() => {
            console.log("gogo");
          }}
        />
      </ContainerInput>

      <SimilarApt data={aptSimilarData} />
    </Container>
  );
};

export default IAAptSimilar;
