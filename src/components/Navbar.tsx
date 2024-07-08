import styled from "styled-components";
import Socials from "./Socials";
import { ModeType, VariantType } from "../types/types";
import logo from "../assets/logo_small.png";
import { Link } from "react-router-dom";

const Nav = styled.nav<{ type: string }>`
  position: ${(props) => (props.type === "primary" ? "absolute" : "relative")};
  top: 0;
  width: -webkit-fill-available;
  background-color: ${(props) =>
    props.type === "primary" ? "transparent" : "#ffffff"};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: ${(props) =>
    props.type === "primary" ? "3.188rem 10%" : "1.094rem 10%"};
`;

const LinksList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: -webkit-fill-available;
`;

const StyledLink = styled(Link)<{ mode: ModeType }>`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => (props.mode === "light" ? "#5e262b" : "#ffffff")};
`;

interface NavbarProps {
  type?: VariantType;
  mode?: ModeType;
}

const Navbar = ({ mode = "light", type = "primary" }: NavbarProps) => {
  return (
    <Nav type={type}>
      <LinksList>
        <li>
          <StyledLink mode={mode} to="">
            About me
          </StyledLink>
        </li>
        <li>
          <StyledLink mode={mode} to="">
            Web design
          </StyledLink>
        </li>
        <li>
          <StyledLink mode={mode} to="">
            Graphic Design
          </StyledLink>
        </li>
      </LinksList>
      {type === "secondary" && <img src={logo} />}
      <LinksList>
        <li>
          <StyledLink mode={mode} to="">
            Illustrations
          </StyledLink>
        </li>
        <li>
          <StyledLink mode={mode} to="">
            Contact me
          </StyledLink>
        </li>
        <li>
          <Socials size="sm" mode={mode} />
        </li>
      </LinksList>
    </Nav>
  );
};
export default Navbar;
