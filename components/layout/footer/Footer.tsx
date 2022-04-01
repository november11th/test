import styled from "@emotion/styled";
import Link from "next/link";
import FooterText from "./FooterText";
import FooterTextLink from "./FooterTextLink";
import FooterLogo from "./FooterLogo";
import Text from "../../elements/Text";
import { theme } from "../../../styles/theme";
import useNavBarStyle from "../../../hooks/useNavBarStyle";

const Container = styled.footer<{ backgroundColor: string }>`
  position: relative;
  min-width: ${({ theme }) => theme.size.pageWidth};
  padding-top: 60px;
  padding-left: ${({ theme }) => theme.size.layoutXPadding};
  padding-right: ${({ theme }) => theme.size.layoutXPadding};
  padding-bottom: ${({ theme }) => theme.size.layoutBottomPadding};
  margin: 0 auto;
  background-color: ${(props) => props.backgroundColor};
`;

const Inside = styled.div`
  position: relative;
  height: ${({ theme }) => theme.size.footerHeight};
`;

const InsideRowLink = styled.div`
  margin: 0 0 27px;
`;

const InsideRowAddress = styled.div``;

const InsideRowCopyright = styled.div`
  margin-bottom: -7px;
`;

const Footer = () => {
  const navBarStyle = useNavBarStyle();

  return (
    <Container backgroundColor={navBarStyle.backgroundColor}>
      <Inside>
        <InsideRowLink>
          <Link href={"/terms"} passHref>
            <FooterTextLink>
              <Text type={"copy"} scale={"5"}>
                이용약관
              </Text>
            </FooterTextLink>
          </Link>
          <Link href={"/privacy"} passHref>
            <FooterTextLink>
              <Text type={"copy"} scale={"5"}>
                개인정보 처리방침
              </Text>
            </FooterTextLink>
          </Link>
        </InsideRowLink>
        <InsideRowAddress>
          <FooterText>
            <Text type={"copy"} scale={"5"}>
              서울특별시 중구 을지로 65 SKT타워
            </Text>
          </FooterText>
          <FooterText>
            <Text type={"copy"} scale={"5"}>
              사업자 등록번호. 104-81-37225
            </Text>
          </FooterText>
        </InsideRowAddress>
        <InsideRowCopyright>
          <FooterText>
            <Text type={"copy"} scale={"5"} color={theme.colors.gray6e}>
              &copy; SK Telecom. All Rights Reserved.
            </Text>
          </FooterText>
          <FooterText>
            <Text type={"copy"} scale={"5"} color={theme.colors.gray6e}>
              Puzzle
            </Text>
          </FooterText>
        </InsideRowCopyright>
        <FooterLogo />
      </Inside>
    </Container>
  );
};

export default Footer;
