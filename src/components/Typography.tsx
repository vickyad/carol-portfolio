import styled from "styled-components";
import { SizeType, VariantType, WeightType } from "../types/types";

type ComponentType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

const PrimaryFont = `
  font-family: Cooper, Arial, serif;
  text-shadow: 2px 0 #5e262b, -2px 0 #5e262b, 0 2px #5e262b, 0 -2px #5e262b,
    1px 1px #5e262b, -1px -1px #5e262b, 1px -1px #5e262b, -1px 1px #5e262b,
    5px 5px 0px #5e262b;
  color: #fddc86;
`;

const SecondaryFont = `
  font-family: Amsipro, Arial, serif;
  color: #5e262b;
`;

const TertiaryFont = `
  font-family: Cooper, Arial, serif;
  color: #5e262b;
  text-transform: uppercase;
`;

const SmStyle = `
  font-size: 0.75rem;
  line-height: 1.125rem;
`;

const BaseStyle = `
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const LgStyle = `
  font-size: 1rem;
  line-height: 1.5rem;
`;

const XlStyle = `
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const Xl2Style = `
  font-size: 1.25rem;
  line-height: 1.875rem;
`;

const Xl3Style = `
  font-size: 1.5rem;
  line-height: 2.125rem;
`;

const Xl4Style = `
  font-size: 2rem;
  line-height: 2.375rem;
`;

const Xl5Style = `
  font-size: 2.5rem;
  line-height: 3rem;
`;

const Xl6Style = `
  font-size: 3rem;
  line-height: 3.5rem;
`;

const Xl7Style = `
  font-size: 3.75rem;
  line-height: 4.125rem;
`;

const Xl8Style = `
  font-size: 4.375rem;
  line-height: 6.125rem;
`;

const Xl9Style = `
  font-size: 5rem;
  line-height: 6.5rem;
`;

const getFontSize = (size: SizeType) => {
  switch (size) {
    case "sm":
      return SmStyle;
    case "base":
      return BaseStyle;
    case "lg":
      return LgStyle;
    case "2xl":
      return Xl2Style;
    case "3xl":
      return Xl3Style;
    case "4xl":
      return Xl4Style;
    case "5xl":
      return Xl5Style;
    case "6xl":
      return Xl6Style;
    case "7xl":
      return Xl7Style;
    case "8xl":
      return Xl8Style;
    case "9xl":
      return Xl9Style;
    case "xl":
    default:
      return XlStyle;
  }
};

const Paragraph = styled.p<{
  variant: VariantType;
  size: SizeType;
  weight: WeightType | string;
  textAlign:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
}>`
  ${(props) =>
    props.variant === "primary"
      ? PrimaryFont
      : props.variant === "secondary"
      ? SecondaryFont
      : TertiaryFont}
  ${(props) => getFontSize(props.size)};
  font-weight: ${(props) => props.weight};
  text-align: ${(props) => props.textAlign};
`;

interface TypographyProps {
  children: React.ReactNode;
  size?: SizeType;
  variant?: VariantType;
  component?: ComponentType;
  weight?: WeightType;
  style?: React.CSSProperties;
  textAlign?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent";
}

const Typography = ({
  children,
  size = "xl",
  variant = "secondary",
  component = "p",
  weight = "regular",
  textAlign = "left",
  style,
}: TypographyProps) => {
  return (
    <Paragraph
      as={component}
      variant={variant}
      size={size}
      weight={variant === "primary" ? "900" : weight}
      style={style}
      textAlign={textAlign}
    >
      {children}
    </Paragraph>
  );
};
export default Typography;
