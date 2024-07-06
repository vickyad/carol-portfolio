import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 1.25rem;
  padding: 4.25rem 5.5rem;
  display: grid;
  align-items: center;
  grid-template-columns: 6fr 2fr 7fr;
  gap: 1.25rem 2.625rem;
`;

const Title = styled.h4`
  color: #212121;
  font-size: 1.5rem;
  grid-column-start: span 3;
`;

const Abc = styled.p`
  color: #212121;
  font-weight: bold;
  font-size: 3.375rem;
`;

const Purpose = styled.p`
  color: #212121;
  grid-column-start: span 3;
`;

const Paragraph = styled.p`
  color: #212121;
  font-weight: bold;
`;

interface TypographyBoxProps {
  font: string;
  purpose: string;
}

const TypographyBox = ({ font, purpose }: TypographyBoxProps) => {
  return (
    <Container>
      <Title>{font}</Title>
      <Abc>Aa 123</Abc>
      <Paragraph>Bold</Paragraph>
      <Paragraph>
        Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx
        Yy Zz
      </Paragraph>
      <Purpose>{purpose}</Purpose>
    </Container>
  );
};
export default TypographyBox;
