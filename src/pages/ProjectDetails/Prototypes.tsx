import styled from "styled-components";
import ThankYou from "../../components/ThankYou";
import Typography from "../../components/Typography";

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
            <Typography variant="primary" size="6xl">
              {prototype.title}
            </Typography>
            <Typography>{prototype.description}</Typography>
          </Container>
          <video width="100%" controls>
            <source src={prototype.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
      <ThankYou />
    </section>
  );
};
export default Prototypes;
