import styled from "styled-components";
import Icon from "./Icon";
import { ModeType, SizeType } from "../types/types";

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

const Socials = ({ size = "md", mode = "dark" }: SocialsProps) => {
  return (
    <Container size={size}>
      <li>
        <a>
          <Icon
            type="linkedin"
            size={size}
            color={mode === "light" ? "#5e262b" : "#ffffff"}
          />
        </a>
      </li>
      <li>
        <a>
          <Icon
            type="instagram"
            size={size}
            color={mode === "light" ? "#5e262b" : "#ffffff"}
          />
        </a>
      </li>
      <li>
        <a>
          <Icon
            type="instagram"
            size={size}
            color={mode === "light" ? "#5e262b" : "#ffffff"}
          />
        </a>
      </li>
      <li>
        <a>
          <Icon
            type="instagram"
            size={size}
            color={mode === "light" ? "#5e262b" : "#ffffff"}
          />
        </a>
      </li>
    </Container>
  );
};
export default Socials;
