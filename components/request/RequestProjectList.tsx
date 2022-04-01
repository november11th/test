import styled from "@emotion/styled";
import InnerContainerBase from "../layout/InnerContainerBase";
import Text from "../elements/Text";
import { sampleDataList } from "../../temp_data/data";
import DataCardList from "../card/DataCardList";

const dummy_productUnit = sampleDataList.filter(
  (data) => data.partner !== "SKTelecom"
);
const productN = dummy_productUnit.length;

const Container = styled(InnerContainerBase)`
  padding-top: calc(${({ theme }) => theme.size.navBarHeight} + 40px);
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: ${productN < 3 ? "300px" : "100px"};
`;

const Title = styled.div`
  display: flex;
  width: 340px;
  align-self: flex-start;
`;
const ProductContainer = styled.div``;

const RequestProjectList = () => {
  return (
    <Container>
      <Title>
        <Text type={"title"} scale={"3"}>
          {`협업을 통해\n출시된\n데이터 목록`}
        </Text>
      </Title>
      <ProductContainer>
        <DataCardList cardList={dummy_productUnit} gridColsCount={3} />
      </ProductContainer>
    </Container>
  );
};

export default RequestProjectList;
