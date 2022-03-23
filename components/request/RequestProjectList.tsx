import styled from "@emotion/styled";
import { useEffect } from "react";
import InnerContainerBase from "../layout/InnerContainerBase";
import CardList from "../card/CardList";
import Text from "../elements/Text";
import { sampleDataList } from "../../temp_data/data";

const dummy_productUnit = sampleDataList.filter(
  (data) => data.partner !== "SKTelecom"
);
const Container = styled(InnerContainerBase)`
  padding-top: calc(${({ theme }) => theme.size.navBarHeight} + 40px);
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
const Title = styled.div`
  display: flex;
  width: 340px;
  align-self: flex-start;
`;
const ProductContainer = styled.div`
  /* margin-right: 20px; */
  width: 100%;
`;

const RequestProjectList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container>
      <Title>
        <Text type={"title"} scale={"3"}>
          {`협업을 통해\n출시된\nData Intelligence List`}
        </Text>
      </Title>
      <ProductContainer>
        <CardList dataList={dummy_productUnit} gridColsCount={3} />
      </ProductContainer>
    </Container>
  );
};

export default RequestProjectList;
