import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 26% auto;
  gap: 1.125rem 3rem;
  align-items: center;
  margin-top: 8.25rem;
`;

const Title = styled.h1`
  grid-row-start: span 2;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

interface PresentationProps {
  title: string;
  subtitle: string;
  description: string[];
}

const Presentation = ({ title, subtitle, description }: PresentationProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <div>
        {description.map((paragraph: string, index: number) => (
          <p key={`description_paragraph_${index}`}>{paragraph}</p>
        ))}
      </div>
    </Container>
  );
};
export default Presentation;
