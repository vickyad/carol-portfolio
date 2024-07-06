import styled from "styled-components";
import Box from "../../components/Box";

const Container = styled.div`
  margin: 12.5rem 0;
`;

const Title = styled.h4`
  font-family: Cooper, Arial, serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  margin: 3.75rem 0 2.5rem;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
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
      <Box title={"Briefing"} text={briefing} />
      <Title>Brand Analysis</Title>
      <BoxContainer>
        <Box title={"Audience"} text={audience} size="sm" />
        <Box title={"Brand Beliefs"} text={brandBeliefs} size="sm" />
        <Box title={"Brand Personality"} text={brandPersonality} size="sm" />
      </BoxContainer>
    </Container>
  );
};
export default Briefing;
