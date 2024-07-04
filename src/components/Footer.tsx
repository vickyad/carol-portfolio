import styled from "styled-components";
import footerBg from "../assets/footer_bg.png";
import logo from "../assets/logo_large.png";
import Socials from "./Socials";
import Banner from "./Banner";

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

const Links = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 4%;
`;

const ContactMe = styled.p`
  font-size: 1.25rem;
`;

const Copyright = styled.span`
  font-size: 1rem;
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
      <Banner
        texts={["UX DESIGN", "UI DESING", "GRAPHIC DESIGN", "ILLUSTRATION"]}
      />
      <InnerContainer>
        <img src={logo} />
        <Content>
          <Links>
            <li>
              <a>ABOUT ME</a>
            </li>
            <li>
              <a>WEB DESIGN</a>
            </li>
            <li>
              <a>GRAPHIC DESIGN</a>
            </li>
            <li>
              <a>ILLUSTRATIONS</a>
            </li>
          </Links>
          <ContactMe>Contact Me: carolina.silva.w@gmail.com</ContactMe>
          <Socials />
        </Content>
        <Copyright>© 2023 by Carolina Silva da Silva</Copyright>
      </InnerContainer>
      <FooterBgImg src={footerBg} />
    </Container>
  );
};
export default Footer;
