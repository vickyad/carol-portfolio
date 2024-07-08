import styled from "styled-components";
import Typography from "./Typography";
import { WeightType } from "../types/types";

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 1.25rem;
  padding: 4.25rem 5.5rem;
  display: grid;
  grid-template-columns: 3.5fr 7fr;
  gap: 2.625rem;
  align-items: center;
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

const BaseFontStyle = {
  color: "#212121",
  gridColumnStart: "span 3",
};

interface TypographyBoxProps {
  font: string;
  purpose: string;
  weights: WeightType[];
}

const TypographyBox = ({ font, purpose, weights }: TypographyBoxProps) => {
  return (
    <Container>
      <LeftContainer>
        <Typography size="3xl" style={BaseFontStyle}>
          {font}
        </Typography>
        <Typography
          style={{
            ...BaseFontStyle,
            fontSize: "3.375rem",
            fontWeight: "700",
            fontFamily: `${font}, Arial, serif`,
          }}
        >
          Aa 123
        </Typography>
        <Typography size="2xl" style={BaseFontStyle}>
          {purpose}
        </Typography>
      </LeftContainer>
      <RightContainer>
        {weights.map((weight) => (
          <>
            <Typography
              weight={weight}
              style={{
                fontFamily: `${font}, Arial, serif`,
                color: "#212121",
                textTransform: "capitalize",
              }}
            >
              {weight}
            </Typography>
            <Typography
              weight={weight}
              style={{
                fontFamily: `${font}, Arial, serif`,
                color: "#212121",
                textTransform: "capitalize",
              }}
            >
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </Typography>
          </>
        ))}
      </RightContainer>
    </Container>
  );
};
export default TypographyBox;
