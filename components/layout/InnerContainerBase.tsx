import styled from "@emotion/styled";

const InnerContainerBase = styled.div`
  position: relative;
  width: ${({ theme }) => theme.size.pageWidth};
  margin: 0 auto;
  background-color: transparent;
  padding-top: 30px;
  padding-bottom: 100px;
  padding-left: ${({ theme }) => theme.size.layoutXPadding};
  padding-right: ${({ theme }) => theme.size.layoutXPadding};
`;

export default InnerContainerBase;
