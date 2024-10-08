import styled from "styled-components";
import footerBg from "../assets/footer_bg.png";
import Socials from "./Socials";
import FooterBanner from "./FooterBanner";
import Typography from "./Typography";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const Container = styled.footer`
  position: relative;
  background: linear-gradient(180deg, #fddc86 16.15%, #fff8ba 100%);
`;

const InnerContainer = styled.div`
  position: inherit;
  z-index: 2;
  height: 40.625rem;
  width: 41%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 3.125rem;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const LinksList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 4%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: #5e262b;
`;

const FooterBgImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
`;

const DevLink = styled(Link)`
  color: #e05b68;
  font-weight: bold;
  text-decoration: none;
`;

const TransparentLink = styled(Link)`
  color: #5e262b;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <Container>
      <FooterBanner
        texts={["UX DESIGN", "UI DESING", "GRAPHIC DESIGN", "ILLUSTRATION"]}
      />
      <InnerContainer>
        <Icon type="logo" />
        <Content>
          <LinksList>
            <li>
              <StyledLink to="">ABOUT ME</StyledLink>
            </li>
            <li>
              <StyledLink to="">WEB DESIGN</StyledLink>
            </li>
            <li>
              <StyledLink to="">GRAPHIC DESIGN</StyledLink>
            </li>
            <li>
              <StyledLink to="">ILLUSTRATIONS</StyledLink>
            </li>
          </LinksList>
          <Typography size="2xl">
            Contact Me:{" "}
            <TransparentLink to="mailto:carolina.silva.w@gmail.com">
              carolina.silva.w@gmail.com
            </TransparentLink>
          </Typography>
          <Socials />
        </Content>
        <Typography size="lg">© 2023 by Carolina Silva da Silva</Typography>
        <Typography size="base">
          Coded with love by{" "}
          <DevLink
            to="https://www.linkedin.com/in/victoria-duarte-193322176/"
            target="_blank"
          >
            Vic
          </DevLink>
        </Typography>
      </InnerContainer>
      <FooterBgImg src={footerBg} />
    </Container>
  );
};
export default Footer;
