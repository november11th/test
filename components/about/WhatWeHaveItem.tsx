import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgContainer = styled.img`
  width: 100px;
`;
const Title = styled.p`
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  display: block;
  margin-top: 24px;
  font-size: 24px;
  line-height: 1.33;
`;
const Desc = styled.p`
  white-space: pre-line;
  margin-top: 12px;
  font-size: 22px;
  line-height: 1.64;
`;

interface Props {
  imgSrc: string;
  title: string;
  desc: string;
}

const WhatWeHaveItem = ({ imgSrc, title, desc }: Props) => {
  return (
    <Container>
      <ImgContainer src={imgSrc} />
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Container>
  );
};

export default WhatWeHaveItem;
