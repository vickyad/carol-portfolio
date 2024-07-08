import styled from "styled-components";
import { SizeType } from "../types/types";
import Typography from "./Typography";

const Container = styled.div`
  border: solid 2px #5e262b;
  border-radius: 1.25rem;
`;

const TitleContainer = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 1.25rem 1.25rem 0 0;
  padding: 0.938rem 5.563rem;
`;

const TextContainer = styled.div`
  padding: 2.5rem 5.625rem;
`;

const Bold = styled.span`
  font-weight: bold;
`;

interface BoxProps {
  title: string;
  text: (string | { label: string; value: string })[];
  color: string;
  size?: SizeType;
}

const Box = ({ title, text, color, size = "xl" }: BoxProps) => {
  const isOptionObject = (
    obj: any
  ): obj is { label: string; value: string } => {
    return (
      typeof obj === "object" &&
      obj !== null &&
      "label" in obj &&
      "value" in obj
    );
  };

  return (
    <Container>
      <TitleContainer color={color}>
        <Typography size={size} variant="tertiary">
          {title}
        </Typography>
      </TitleContainer>
      <TextContainer>
        {text.map((paragraph, index) =>
          isOptionObject(paragraph) ? (
            <div key={index}>
              <Typography size={size === "3xl" ? "2xl" : size}>
                <Bold>{paragraph.label}:</Bold> {paragraph.value}
              </Typography>
            </div>
          ) : (
            <Typography size={size === "3xl" ? "2xl" : size} key={index}>
              {paragraph}
            </Typography>
          )
        )}
      </TextContainer>
    </Container>
  );
};
export default Box;
