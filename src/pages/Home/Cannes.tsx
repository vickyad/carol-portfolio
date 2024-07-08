import styled from "styled-components";
import cannesBanner from "../../assets/cannes.png";
import Button from "../../components/Button";
import Typography from "../../components/Typography";

const Container = styled.section`
  background-color: #e4d6f5;
  border-radius: 1.25rem;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const InnerContainer = styled.div`
  padding: 4.75rem 9%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const BannerImg = styled.img`
  border-radius: 0 1.25rem 1.25rem 0;
  width: 50%;
`;

const Cannes = () => {
  return (
    <Container>
      <InnerContainer>
        <Typography variant="primary" size="6xl">
          2023 Cannes Lions and Grand Prix Winners
        </Typography>
        <Typography>
          Brazilian pharmaceutical corporation Eurofarma scooped the top prize
          for Scrolling Therapy – a campaign by Dentsu Creative in Buenos Aires,
          São Paulo and New York that enables people with Parkinson’s to
          navigate their social media feeds using facial expressions.
        </Typography>
        <Button
          handleClick={() => console.log("Not implemmented yet")}
          variant="secondary"
        >
          READ MORE
        </Button>
      </InnerContainer>
      <BannerImg src={cannesBanner} />
    </Container>
  );
};
export default Cannes;
