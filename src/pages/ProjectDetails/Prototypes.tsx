import styled from 'styled-components';
import ThankYou from '../../components/ThankYou';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
  gap: 2.625rem;
  margin: 6.25rem 0 3.75rem;
`;

interface PrototypesProps {
  prototypes: { title: string; description: string; video: string }[];
}

const Prototypes = ({ prototypes }: PrototypesProps) => {
  return (
    <section>
      {prototypes.map((prototype) => (
        <div>
          <Container>
            <h2>{prototype.title}</h2>
            <p>{prototype.description}</p>
          </Container>
          <span>VIDEO HERE</span>
        </div>
      ))}
      <ThankYou />
    </section>
  );
};
export default Prototypes;
