import styled from "styled-components";
import Navbar from "../../components/Navbar";

const HeroImg = styled.img`
  width: 100vw;
  height: auto;
`;

const ScrollImg = styled.img`
  display: block;
  margin: 0 auto;
  transform: translateY(-50%);
`;

const Content = styled.div`
  padding: 0 10%;
`;

const AboutMeSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

const AboutMeImg = styled.img`
  grid-row-start: span 3;
  width: 33.5rem;
`;

const Title = styled.h1`
  text-shadow: 2px 0 #5e262b, -2px 0 #5e262b, 0 2px #5e262b, 0 -2px #5e262b,
    1px 1px #5e262b, -1px -1px #5e262b, 1px -1px #5e262b, -1px 1px #5e262b,
    6px 6px 0px #5e262b;
  font-size: 4.375rem;
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg src="assets/hero.png" />
      <ScrollImg src="assets/scroll.png" />
      <Content>
        <AboutMeSection>
          <AboutMeImg src="assets/about-me.png" />
          <Title>Hello,</Title>
          <p>
            I´m <span style={{ fontWeight: 800 }}>Carolina Silva da Silva</span>
            , a seasoned designer with 6 years of expertise. Over the past 4
            years, I have specialized as a UX/UI Product Designer in the dynamic
            tech industry, collaborating with diverse teams from the UK, USA,
            and Latin America. I've designed innovative international websites,
            platforms, and mobile apps for a wide array of companies, showcasing
            innovation and creativity in every project. You can see down below
            some of my stronges abilities:
          </p>
          <div></div>
        </AboutMeSection>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </Content>
    </div>
  );
};
export default Home;
