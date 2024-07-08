import styled from "styled-components";
import TypographyBox from "../../components/TypographyBox";
import { ColorPaletteType, WeightType } from "../../types/types";
import ColorPalette from "../../components/ColorPalette";
import UIComponents from "../../components/UIComponents";
import Typography from "../../components/Typography";

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

interface StyleGuideProps {
  pageId: string;
  description: string;
  fontsUsed: { name: string; purpose: string; weight: WeightType[] }[];
  typographyDescription: string[];
  colorPalette: ColorPaletteType[];
  colorPaletteDescription: { weight: WeightType; text: string }[];
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
        <Typography variant="primary" size="6xl" textAlign="center">
          Style Guide
        </Typography>
        <Typography textAlign="center">{description}</Typography>
      </TitleContainer>
      <Section>
        <div>
          <Typography
            variant="tertiary"
            size="3xl"
            style={{ marginBottom: "1.25rem" }}
          >
            Typography
          </Typography>
          <div>
            {typographyDescription.map((paragraph) => (
              <Typography>{paragraph}</Typography>
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
          <Typography
            variant="tertiary"
            size="3xl"
            style={{ marginBottom: "1.25rem" }}
          >
            Color Palette
          </Typography>
          <ColorPaletteContainer>
            {colorPaletteDescription.map((paragraph) => (
              <Typography weight={paragraph.weight}>
                {paragraph.text}
              </Typography>
            ))}
          </ColorPaletteContainer>
        </div>
        <ColorPalette colorPalette={colorPalette} />
      </Section>
      <Section>
        <div>
          <Typography
            variant="tertiary"
            size="3xl"
            style={{ marginBottom: "1.25rem" }}
          >
            UI Components
          </Typography>
          <p>{uiComponentsDescription}</p>
        </div>
        <UIComponents type={pageId} />
      </Section>
    </Container>
  );
};
export default StyleGuide;
