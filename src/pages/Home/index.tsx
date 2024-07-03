import styled from "styled-components";
import Navbar from "../../components/Navbar";
import heroBanner from "../../assets/hero_day.png";
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
  padding: 0 10%;
`;

const Home = () => {
  return (
    <div>
      <Navbar />
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
