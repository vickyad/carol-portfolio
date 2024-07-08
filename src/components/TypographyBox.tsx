import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 1.25rem;
  padding: 4.25rem 5.5rem;
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: 2.625rem;
  align-items: center;
`;

const Title = styled.h4`
  color: #212121;
  font-size: 1.5rem;
  grid-column-start: span 3;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const RightContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 1.25rem;
  align-items: center;
`;

const Abc = styled.p`
  color: #212121;
  font-weight: bold;
  font-size: 3.375rem;
  grid-row-start: span 3;
`;

const Purpose = styled.p`
  color: #212121;
  grid-column-start: span 3;
`;

const Paragraph = styled.p<{ weight: string }>`
  color: #212121;
  font-weight: ${(props) => props.weight};
  text-transform: capitalize;
`;

interface TypographyBoxProps {
  font: string;
  purpose: string;
  weights: string[];
}

const TypographyBox = ({ font, purpose, weights }: TypographyBoxProps) => {
  return (
    <Container>
      <LeftContainer>
        <Title>{font}</Title>
        <Abc>Aa 123</Abc>
        <Purpose>{purpose}</Purpose>
      </LeftContainer>
      <RightContainer>
        {weights.map((weight) => (
          <>
            <Paragraph weight={weight}>{weight}</Paragraph>
            <Paragraph weight={weight}>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </Paragraph>
          </>
        ))}
      </RightContainer>
    </Container>
  );
};
export default TypographyBox;
