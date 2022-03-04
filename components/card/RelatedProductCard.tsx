import styled from "@emotion/styled";
import Link from "next/link";
import Text from "../../components/elements/Text";
import { RelatedProduct } from "../../types/relatedProduct";

const Container = styled.div``;
const Box = styled.div`
  width: 294.3px;
  height: 131px;
  padding: 10.8px;
  margin-bottom: 0px 0px 16px 0px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.grayF4};

  &:hover {
    border: solid 1px ${({ theme }) => theme.colors.gray6e};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
const Div = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface Props {
  data: RelatedProduct;
  className?: string;
}
const RelatedProductCard = ({ data, className }: Props) => {
  const { type, name, partner } = data;
  return (
    <Container className={className}>
      <Link href={"/"} passHref>
        <Box>
          <Text type={"copy"} scale={"6"}>
            {type}
          </Text>
          <Div>
            <Text type={"copy"} scale={"3"}>
              {name}
            </Text>
            {partner && (
              <Text type={"copy"} scale={"7"}>{`With ${partner}`}</Text>
            )}
          </Div>
        </Box>
      </Link>
    </Container>
  );
};

export default RelatedProductCard;
