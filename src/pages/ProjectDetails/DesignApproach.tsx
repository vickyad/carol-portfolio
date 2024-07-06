import styled from 'styled-components';
import Box from '../../components/Box';

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

interface DesignApproachProps {
  designApproach: { title: string; text: string }[];
}

const DesignApproach = ({ designApproach }: DesignApproachProps) => {
  return (
    <section>
      <Title>DESIGN APPROACH</Title>
      <BoxContainer>
        {designApproach.map((item) => (
          <Box
            title={item.title}
            text={[item.text]}
            size="sm"
            color="#B7D9D4"
          />
        ))}
      </BoxContainer>
    </section>
  );
};
export default DesignApproach;
