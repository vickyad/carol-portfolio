import styled from "styled-components";
import aboutMeImg from "../../assets/about-me.png";
import Icon from "../../components/Icon";
import Typography from "../../components/Typography";
import { abilities } from "../../content/abilities";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin: 4.375rem 0 15.813rem;
`;

const AboutMeImg = styled.img`
  width: 33rem;
  height: fit-content;
`;

const BoldFont = styled.span`
  font-weight: bold;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 3rem 0 1.5rem;
`;

const AbilitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8%;
`;

const AbilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: -webkit-fill-available;
  gap: 0.625rem;
`;

const AboutMe = () => {
  return (
    <Container id="about_me_section">
      <AboutMeImg src={aboutMeImg} />
      <InnerContainer>
        <Typography size="8xl" component="h1" variant="primary">
          Hello,
        </Typography>
        <div>
          <Typography style={{ marginBottom: "1.25rem" }}>
            I´m <BoldFont>Carolina Silva da Silva</BoldFont>, a seasoned
            designer with 6 years of expertise. Over the past 4 years, I have
            specialized as a UX/UI Product Designer in the dynamic tech
            industry, collaborating with diverse teams from the UK, USA, and
            Latin America. I've designed innovative international websites,
            platforms, and mobile apps for a wide array of companies, showcasing
            innovation and creativity in every project.
          </Typography>
          <Typography>
            You can see down below some of my stronges abilities:
          </Typography>
        </div>
        <AbilitiesContainer>
          {abilities.map((ability, index) => (
            <AbilityContainer key={`ability_${index}`}>
              <Icon type={ability.type} />
              <Typography size="3xl" weight="bold" textAlign="center">
                {ability.label}
              </Typography>
            </AbilityContainer>
          ))}
        </AbilitiesContainer>
      </InnerContainer>
    </Container>
  );
};
export default AboutMe;
