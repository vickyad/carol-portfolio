import styled from 'styled-components';
import Socials from './Socials';
import { ModeType, VariantType } from '../types/types';
import logo from '../assets/logo_small.png';

const Nav = styled.nav<{ type: string }>`
  position: ${(props) => (props.type === 'primary' ? 'absolute' : 'relative')};
  top: 0;
  width: -webkit-fill-available;
  background-color: ${(props) =>
    props.type === 'primary' ? 'transparent' : '#ffffff'};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: ${(props) =>
    props.type === 'primary' ? '3.188rem 10%' : '1.094rem 10%'};
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: -webkit-fill-available;
`;

const Link = styled.a<{ mode: ModeType }>`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => (props.mode === 'light' ? '#5e262b' : '#ffffff')};
`;

interface NavbarProps {
  type?: VariantType;
  mode?: ModeType;
}

const Navbar = ({ mode = 'light', type = 'primary' }: NavbarProps) => {
  return (
    <Nav type={type}>
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
      {type === 'secondary' && <img src={logo} />}
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
