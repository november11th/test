import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  padding-bottom: 52px;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const CardListWrapper = styled.div`
  padding-top: 30px;
`;

const GridContainer = styled.div`
  display: grid;
  row-gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const LoadingBase = styled.div`
  background-color: ${({ theme }) => theme.colors.loading};
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

const TextWithCountLoading = styled(LoadingBase)`
  margin-top: 30px;
  width: 100px;
  height: 45px;
`;

const CardLoading = styled(LoadingBase)`
  width: ${({ theme }) => theme.size.cardWidth};
  height: ${({ theme }) => theme.size.cardHeight};
  border-radius: ${({ theme }) => theme.size.cardBorderRadius};
`;

const CardListWithLabelLoading = () => {
  return (
    <Container>
      <TextWithCountLoading />
      <CardListWrapper>
        <GridContainer>
          <CardLoading></CardLoading>
          <CardLoading></CardLoading>
          <CardLoading></CardLoading>
          <CardLoading></CardLoading>
        </GridContainer>
      </CardListWrapper>
    </Container>
  );
};

export default CardListWithLabelLoading;
