import styled from "styled-components";
import Socials from "./Socials";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  width: -webkit-fill-available;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3.188rem 10%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7.25rem;
`;

const Link = styled.a`
  text-decoration: none;
  text-transform: uppercase;
`;
const Navbar = () => {
  return (
    <Nav>
      <Section>
        <Link href="">About me</Link>
        <Link href="">Web design</Link>
        <Link href="">Graphic Design</Link>
      </Section>
      <Section>
        <Link href="">Illustrations</Link>
        <Link href="">Contact me</Link>
        <Socials />
      </Section>
    </Nav>
  );
};
export default Navbar;
