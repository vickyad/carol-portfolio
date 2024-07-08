import styled from "styled-components";
import { VariantType } from "../types/types";
import { Link } from "react-router-dom";

const Container = styled(Link)<{ variant: VariantType }>`
  width: fit-content;
  background-color: ${(props) =>
    props.variant === "primary" ? "#E05B68" : "#a686fc"};
  color: #ffffff;
  padding: 0.625rem 2.5rem;
  border-radius: 3rem;
  border: none;
  font-weight: bold;
  font-size: 1.25rem;
  text-decoration: none;

  &:hover,
  &:active {
    background-color: ${(props) =>
      props.variant === "primary" ? "#5E262B" : "#846bc9"};
    box-shadow: 0px 4px 4px 0px #00000059;
  }

  &:focus {
    border: solid 2px
      ${(props) => (props.variant === "primary" ? "#5E262B" : "#846bc9")};
  }

  &:disabled {
    background-color: ${(props) =>
      props.variant === "primary" ? "#EDC2C6" : "#e4d6f5"};
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  variant?: VariantType;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  style?: React.CSSProperties;
}

const Button = ({
  children,
  variant = "primary",
  href,
  target,
  style,
}: ButtonProps) => {
  return (
    <Container to={href} variant={variant} target={target} style={style}>
      {children}
    </Container>
  );
};
export default Button;
