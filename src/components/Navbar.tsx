import styled, { css } from "styled-components";
import Socials from "./Socials";
import { ModeType, VariantType } from "../types/types";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const Nav = styled.nav<{ type: string }>`
  position: ${(props) => (props.type === "primary" ? "absolute" : "relative")};
  top: 0;
  width: -webkit-fill-available;
  background-color: ${(props) =>
    props.type === "primary" ? "transparent" : "#ffffff"};
  display: ${(props) => (props.type === "primary" ? "flex" : "grid")};
  flex-direction: row;
  grid-template-columns: auto 119px auto;
  gap: ${(props) => (props.type === "primary" ? "21.875rem" : "0 7.25rem")};
  align-items: center;
  padding: ${(props) =>
    props.type === "primary" ? "3.188rem 10%" : "1.094rem 10%"};
  z-index: 5;
`;

const LinksList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: -webkit-fill-available;
`;

const StyledLink = styled(Link)<{ mode: ModeType; type: string }>`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => (props.mode === "light" ? "#5e262b" : "#ffffff")};
  transition: color 100ms;

  ${(props) =>
    props.type === "primary" &&
    css`
      color: transparent;
    `};
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
          <StyledLink mode={mode} type={type} to="/">
            About me
          </StyledLink>
        </li>
        <li>
          <StyledLink mode={mode} type={type} to="/">
            Cannes Lions
          </StyledLink>
        </li>
        <li>
          <StyledLink mode={mode} type={type} to="/">
            Projects
          </StyledLink>
        </li>
      </LinksList>
      {type === "secondary" && <Icon type="logo" size="sm" />}
      <LinksList>
        <li>
          <StyledLink mode={mode} type={type} to="/">
            Awards
          </StyledLink>
        </li>
        <li>
          <StyledLink mode={mode} type={type} to="/">
            Testimonials
          </StyledLink>
        </li>
        <li>
          <Socials size="sm" mode={mode} type="primary" />
        </li>
      </LinksList>
    </Nav>
  );
};
export default Navbar;
