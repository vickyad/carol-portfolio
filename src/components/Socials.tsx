import styled from "styled-components";
import Icon from "./Icon";
import { ModeType, SizeType, VariantType } from "../types/types";
import { Link } from "react-router-dom";

const Container = styled.ul<{ size: SizeType }>`
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.size === "sm" ? "1.5rem" : "1.875rem")};
`;

interface SocialsProps {
  size?: SizeType;
  mode?: ModeType;
  type?: VariantType;
}

const Socials = ({
  size = "base",
  mode = "light",
  type = "secondary",
}: SocialsProps) => {
  return (
    <Container size={size}>
      <li>
        <Link
          to="https://www.instagram.com/carola_art_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            type="instagram"
            size={size}
            color={
              type === "primary"
                ? "transparent"
                : mode === "light"
                ? "#5e262b"
                : "#ffffff"
            }
          />
        </Link>
      </li>
      <li>
        <Link
          to="https://www.linkedin.com/in/carolina-s-da-silva/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            type="linkedin"
            size={size}
            color={
              type === "primary"
                ? "transparent"
                : mode === "light"
                ? "#5e262b"
                : "#ffffff"
            }
          />
        </Link>
      </li>
      <li>
        <Link
          to="https://dribbble.com/CarolinaSdaSilva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            type="dribble"
            size={size}
            color={
              type === "primary"
                ? "transparent"
                : mode === "light"
                ? "#5e262b"
                : "#ffffff"
            }
          />
        </Link>
      </li>
    </Container>
  );
};
export default Socials;
