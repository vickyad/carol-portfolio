import styled from "styled-components";
import Icon from "./Icon";

const Container = styled.ul<{ size: "sm" | "md" }>`
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: ${(props) => (props.size === "sm" ? "1.5rem" : "1.875rem")};
`;
interface SocialsProps {
  size?: "sm" | "md";
}

const Socials = ({ size = "md" }: SocialsProps) => {
  return (
    <Container size={size}>
      <li>
        <a>
          <Icon type="linkedin" size={size} />
        </a>
      </li>
      <li>
        <a>
          <Icon type="instagram" size={size} />
        </a>
      </li>
      <li>
        <a>
          <Icon type="instagram" size={size} />
        </a>
      </li>
      <li>
        <a>
          <Icon type="instagram" size={size} />
        </a>
      </li>
    </Container>
  );
};
export default Socials;
