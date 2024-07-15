import styled, { keyframes } from "styled-components";
import Navbar from "../../components/Navbar";
import scrollImg from "../../assets/scroll.png";
import AboutMe from "./AboutMe";
import Cannes from "./Cannes";
import BestOfficeAward from "./BestOfficeAward";
import Testimonials from "./Testimonials";
import ProjectCards from "../../components/ProjectCards";
import HeroBanner from "../../components/HeroBanner";
import { useEffect, useState } from "react";

const spin = keyframes`
  0% {
    transform: translateY(-50%) rotate(0);
  }

  100% {
    transform: translateY(-50%) rotate(360deg);
  }
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
  return (
    <div>
      <HeroBanner />
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
