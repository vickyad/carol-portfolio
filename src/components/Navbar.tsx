import styled from "styled-components";
import Socials from "./Socials";
import { ModeType } from "../types/types";

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

const Link = styled.a<{ mode: ModeType }>`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => (props.mode === "light" ? "#5e262b" : "#ffffff")};
`;

interface NavbarProps {
  mode?: ModeType;
}

const Navbar = ({ mode = "dark" }: NavbarProps) => {
  return (
    <Nav>
      <Section>
        <Link mode={mode} href="">
          About me
        </Link>
        <Link mode={mode} href="">
          Web design
        </Link>
        <Link mode={mode} href="">
          Graphic Design
        </Link>
      </Section>
      <Section>
        <Link mode={mode} href="">
          Illustrations
        </Link>
        <Link mode={mode} href="">
          Contact me
        </Link>
        <Socials size="sm" mode={mode} />
      </Section>
    </Nav>
  );
};
export default Navbar;
