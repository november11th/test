import styled from "@emotion/styled";

const InnerContainerBase = styled.div`
  position: relative;
  width: ${({ theme }) => theme.size.pageWidth};
  margin: 0 auto;
  background-color: transparent;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: ${({ theme }) => theme.size.layoutXPadding};
  padding-right: ${({ theme }) => theme.size.layoutXPadding};
`;

export default InnerContainerBase;
