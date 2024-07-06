import styled from "styled-components";
import { ColorPaletteType } from "../types/types";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem 2.5rem;

  :first-child,
  :nth-child(2) {
    grid-row-start: span 3;
  }
`;

const ColorContainer = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 1.25rem;
  padding: 1.875rem;
`;

interface ColorPaletteProps {
  colorPalette: ColorPaletteType[];
}

const ColorPalette = ({ colorPalette }: ColorPaletteProps) => {
  return (
    <Container>
      {colorPalette.map((color) => (
        <ColorContainer color={color.color}>
          <p>{color.name}</p>
          <p>{color.color}</p>
        </ColorContainer>
      ))}
    </Container>
  );
};
export default ColorPalette;
