import styled from "styled-components";
import Box from "../../components/Box";
import Typography from "../../components/Typography";

const Container = styled.section`
  margin: 12.5rem 0;
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`;

interface BriefingProps {
  briefing: string[];
  audience: { label: string; value: string }[];
  brandBeliefs: string[];
  brandPersonality: string[];
}

const Briefing = ({
  briefing,
  audience,
  brandBeliefs,
  brandPersonality,
}: BriefingProps) => {
  return (
    <Container>
      <Box title={"Briefing"} text={briefing} color="#fddc86" size="3xl" />
      <Typography
        size="3xl"
        variant="tertiary"
        textAlign="center"
        style={{ margin: "3.75rem 0 2.5rem" }}
      >
        Brand Analysis
      </Typography>
      <BoxContainer>
        <Box title={"Audience"} text={audience} color="#fddc86" />
        <Box title={"Brand Beliefs"} text={brandBeliefs} color="#fddc86" />
        <Box
          title={"Brand Personality"}
          text={brandPersonality}
          color="#fddc86"
        />
      </BoxContainer>
    </Container>
  );
};
export default Briefing;
