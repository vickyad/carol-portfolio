import styled from 'styled-components';
import TypographyBox from '../../components/TypographyBox';
import { ColorPaletteType } from '../../types/types';
import ColorPalette from '../../components/ColorPalette';
import UIComponents from '../../components/UIComponents';

const Container = styled.section`
  margin: 12.5rem 0;
`;

const TitleContainer = styled.div`
  width: 37%;
  max-width: 35.125rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 0 auto 6.25rem;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: 35% auto;
  gap: 2.5rem;
  margin-bottom: 8.75rem;
`;

const Title = styled.h3`
  font-family: Cooper, Arial, serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
`;

const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.188rem;
`;

const ColorPaletteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
`;

const Paragraph = styled.p<{ fontWeight: string }>`
  font-weight: ${(props) => props.fontWeight};
`;

interface StyleGuideProps {
  pageId: string;
  description: string;
  fontsUsed: { name: string; purpose: string; weight: string[] }[];
  typographyDescription: string[];
  colorPalette: ColorPaletteType[];
  colorPaletteDescription: { weight: string; text: string }[];
  uiComponentsDescription: string;
}

const StyleGuide = ({
  pageId,
  description,
  fontsUsed,
  typographyDescription,
  colorPalette,
  colorPaletteDescription,
  uiComponentsDescription,
}: StyleGuideProps) => {
  return (
    <Container>
      <TitleContainer>
        <h2>Style Guide</h2>
        <p>{description}</p>
      </TitleContainer>
      <Section>
        <div>
          <Title>Typography</Title>
          <div>
            {typographyDescription.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </div>
        </div>
        <TypographyContainer>
          {fontsUsed.map((font) => (
            <TypographyBox
              font={font.name}
              purpose={font.purpose}
              weights={font.weight}
            />
          ))}
        </TypographyContainer>
      </Section>
      <Section>
        <div>
          <Title>Color Palette</Title>
          <ColorPaletteContainer>
            {colorPaletteDescription.map((paragraph) => (
              <Paragraph fontWeight={paragraph.weight}>
                {paragraph.text}
              </Paragraph>
            ))}
          </ColorPaletteContainer>
        </div>
        <ColorPalette colorPalette={colorPalette} />
      </Section>
      <Section>
        <div>
          <Title>UI Components</Title>
          <p>{uiComponentsDescription}</p>
        </div>
        <UIComponents type={pageId} />
      </Section>
    </Container>
  );
};
export default StyleGuide;
