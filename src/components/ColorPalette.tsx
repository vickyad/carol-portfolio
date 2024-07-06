import styled from 'styled-components';
import { ColorPaletteType, ModeType } from '../types/types';

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

const Paragraph = styled.p<{ color: ModeType }>`
  color: ${(props) => (props.color === 'dark' ? '#5E262B' : '#FFFFFF')};
`;

const ColorName = styled(Paragraph)`
  font-family: Cooper, Arial, serif;
  font-weight: bold;
  text-transform: uppercase;
`;

interface ColorPaletteProps {
  colorPalette: ColorPaletteType[];
}

const ColorPalette = ({ colorPalette }: ColorPaletteProps) => {
  return (
    <Container>
      {colorPalette.map((color) => (
        <ColorContainer color={color.color}>
          <ColorName color={color.letterColor}>{color.name}</ColorName>
          <Paragraph color={color.letterColor}>{color.color}</Paragraph>
        </ColorContainer>
      ))}
    </Container>
  );
};
export default ColorPalette;
