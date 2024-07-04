import styled from "styled-components";
import aboutMeImg from "../../assets/about-me.png";
import Icon from "../../components/Icon";

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

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 3rem 0 1.5rem;
`;

const Title = styled.h1`
  text-shadow: 2px 0 #5e262b, -2px 0 #5e262b, 0 2px #5e262b, 0 -2px #5e262b,
    1px 1px #5e262b, -1px -1px #5e262b, 1px -1px #5e262b, -1px 1px #5e262b,
    6px 6px 0px #5e262b;
  font-size: 4.375rem;
`;

const TextContainer = styled.p`
  font-size: 1.25rem;
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

const AbilityLabel = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const abilities = [
  { label: "UX Design", type: "ux-design" },
  { label: "UI Design", type: "ui-design" },
  { label: "Graphic Design", type: "graphic-design" },
  { label: "Illustration", type: "illustration" },
];

const AboutMe = () => {
  return (
    <Container>
      <AboutMeImg src={aboutMeImg} />
      <InnerContainer>
        <Title>Hello,</Title>
        <div>
          <TextContainer style={{ marginBottom: "1.25rem" }}>
            I´m <span style={{ fontWeight: 800 }}>Carolina Silva da Silva</span>
            , a seasoned designer with 6 years of expertise. Over the past 4
            years, I have specialized as a UX/UI Product Designer in the dynamic
            tech industry, collaborating with diverse teams from the UK, USA,
            and Latin America. I've designed innovative international websites,
            platforms, and mobile apps for a wide array of companies, showcasing
            innovation and creativity in every project.
          </TextContainer>
          <TextContainer>
            You can see down below some of my stronges abilities:
          </TextContainer>
        </div>
        <AbilitiesContainer>
          {abilities.map((ability, index) => (
            <AbilityContainer key={`ability_${index}`}>
              <Icon type={ability.type} />
              <AbilityLabel>{ability.label}</AbilityLabel>
            </AbilityContainer>
          ))}
        </AbilitiesContainer>
      </InnerContainer>
    </Container>
  );
};
export default AboutMe;
