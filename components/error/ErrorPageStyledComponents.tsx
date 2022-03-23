import styled from "@emotion/styled";
import InnerContainerBase from "../layout/InnerContainerBase";

export const Container = styled(InnerContainerBase)`
  margin-top: ${({ theme }) => theme.size.navBarHeight};
  min-height: 500px;
  height: calc(
    100vh - ${({ theme }) => theme.size.navBarHeight} -
      ${({ theme }) => theme.size.footerHeight} -
      ${({ theme }) => theme.size.layoutBottomPadding} - 70px
  );
`;

export const TitleWrapper = styled.div`
  margin-bottom: 50px;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Inside = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 50px;
`;
