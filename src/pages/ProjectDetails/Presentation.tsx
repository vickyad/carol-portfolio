import styled from "styled-components";
import Typography from "../../components/Typography";

const Container = styled.section`
  display: grid;
  grid-template-columns: 26% auto;
  gap: 1.125rem 3rem;
  align-items: center;
  margin-top: 8.25rem;
`;

interface PresentationProps {
  title: string;
  subtitle: string;
  description: string[];
}

const Presentation = ({ title, subtitle, description }: PresentationProps) => {
  return (
    <Container>
      <Typography
        variant="primary"
        size="6xl"
        component="h1"
        style={{ gridRowStart: "span 2" }}
      >
        {title}
      </Typography>
      <Typography size="3xl" weight="bold">
        {subtitle}
      </Typography>
      <div>
        {description.map((paragraph: string, index: number) => (
          <Typography key={`description_paragraph_${index}`}>
            {paragraph}
          </Typography>
        ))}
      </div>
    </Container>
  );
};
export default Presentation;
