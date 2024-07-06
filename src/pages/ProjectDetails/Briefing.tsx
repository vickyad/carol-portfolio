import styled from 'styled-components';
import Box from '../../components/Box';

const Container = styled.section`
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
      <Box title={'Briefing'} text={briefing} color="#fddc86" />
      <Title>Brand Analysis</Title>
      <BoxContainer>
        <Box title={'Audience'} text={audience} size="sm" color="#fddc86" />
        <Box
          title={'Brand Beliefs'}
          text={brandBeliefs}
          size="sm"
          color="#fddc86"
        />
        <Box
          title={'Brand Personality'}
          text={brandPersonality}
          size="sm"
          color="#fddc86"
        />
      </BoxContainer>
    </Container>
  );
};
export default Briefing;
