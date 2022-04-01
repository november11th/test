import styled from "@emotion/styled";

const OuterContainerBase = styled.div`
  margin-top: ${({ theme }) => theme.size.navBarHeight};
  background-color: ${({ theme }) => theme.colors.cardListBackground};
  min-width: max-content;
`;

export default OuterContainerBase;
