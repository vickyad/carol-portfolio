import styled from "styled-components";
import Navbar from "../../components/Navbar";
import heroDayBanner from "../../assets/hero_day.png";
import heroNightBanner from "../../assets/hero_night.png";
import scrollImg from "../../assets/scroll.png";
import AboutMe from "./AboutMe";
import Cannes from "./Cannes";
import Projects from "./Projects";
import BestOfficeAward from "./BestOfficeAward";
import Testimonials from "./Testimonials";

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
  padding: 2.5rem 5rem 12.5rem;

  @media (min-width: 1550px) {
    padding: 2.5rem 6.25rem 12.5rem;
  }

  @media (min-width: 1900px) {
    padding: 2.5rem 12.5rem 12.5rem;
  }
`;

const Home = () => {
  const isDarkMode = new Date().getHours() <= 5 && new Date().getHours() >= 18;
  const heroBanner = isDarkMode ? heroNightBanner : heroDayBanner;

  return (
    <div>
      <Navbar mode={isDarkMode ? "dark" : "light"} />
      <HeroImg src={heroBanner} />
      <ScrollImg src={scrollImg} />
      <Content>
        <AboutMe />
        <Cannes />
        <Projects />
        <BestOfficeAward />
        <Testimonials />
      </Content>
    </div>
  );
};
export default Home;
