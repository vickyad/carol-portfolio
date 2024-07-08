import styled, { keyframes } from "styled-components";
import Navbar from "../../components/Navbar";
import heroDayBanner from "../../assets/hero_day.png";
import heroNightBanner from "../../assets/hero_night.png";
import scrollImg from "../../assets/scroll.png";
import AboutMe from "./AboutMe";
import Cannes from "./Cannes";
import BestOfficeAward from "./BestOfficeAward";
import Testimonials from "./Testimonials";
import ProjectCards from "../../components/ProjectCards";

const spin = keyframes`
  0% {
    transform: translateY(-50%) rotate(0);
  }

  100% {
    transform: translateY(-50%) rotate(360deg);
  }
`;

const HeroImg = styled.img`
  width: 100vw;
  height: auto;
`;

const ScrollImg = styled.img`
  display: block;
  margin: 0 auto;
  animation: ${spin} 15000ms linear infinite;
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
  const isDarkMode = new Date().getHours() <= 5 || new Date().getHours() >= 18;
  const heroBanner = isDarkMode ? heroNightBanner : heroDayBanner;

  return (
    <div>
      <Navbar mode={isDarkMode ? "dark" : "light"} />
      <HeroImg src={heroBanner} />
      <ScrollImg src={scrollImg} />
      <Content>
        <AboutMe />
        <Cannes />
        <ProjectCards
          title="Check out some of my work here!"
          description="I've curated some of my best work. You can explore them using the tabs
          below."
        />
        <BestOfficeAward />
        <Testimonials />
      </Content>
    </div>
  );
};
export default Home;
