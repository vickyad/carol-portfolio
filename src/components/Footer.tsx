import styled from "styled-components";
import footerBg from "../assets/footer_bg.png";
import logo from "../assets/logo_large.png";
import Socials from "./Socials";
import FooterBanner from "./FooterBanner";
import Typography from "./Typography";
import { Link } from "react-router-dom";

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

const Footer = () => {
  return (
    <Container>
      <FooterBanner
        texts={["UX DESIGN", "UI DESING", "GRAPHIC DESIGN", "ILLUSTRATION"]}
      />
      <InnerContainer>
        <img src={logo} />
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
            Contact Me: carolina.silva.w@gmail.com
          </Typography>
          <Socials />
        </Content>
        <Typography size="lg">© 2023 by Carolina Silva da Silva</Typography>
      </InnerContainer>
      <FooterBgImg src={footerBg} />
    </Container>
  );
};
export default Footer;
