import styled from "styled-components";
import Icon from "./Icon";
import { ModeType, SizeType } from "../types/types";
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
}

const Socials = ({ size = "base", mode = "light" }: SocialsProps) => {
  return (
    <Container size={size}>
      <li>
        <Link to="">
          <Icon
            type="linkedin"
            size={size}
            color={mode === "light" ? "#5e262b" : "#ffffff"}
          />
        </Link>
      </li>
      <li>
        <Link to="">
          <Icon
            type="instagram"
            size={size}
            color={mode === "light" ? "#5e262b" : "#ffffff"}
          />
        </Link>
      </li>
      <li>
        <Link to="">
          <Icon
            type="instagram"
            size={size}
            color={mode === "light" ? "#5e262b" : "#ffffff"}
          />
        </Link>
      </li>
      <li>
        <Link to="">
          <Icon
            type="instagram"
            size={size}
            color={mode === "light" ? "#5e262b" : "#ffffff"}
          />
        </Link>
      </li>
    </Container>
  );
};
export default Socials;
