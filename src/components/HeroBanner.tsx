import styled from "styled-components";
import heroDayBanner from "../assets/hero/hero_day.png";
import heroNightBanner from "../assets/hero/hero_night.png";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

const Container = styled.div`
  position: relative;

  & .firefly {
    width: 4px;
    height: 4px;
    position: absolute;
    background-color: #ecc45e;
    box-shadow: 0px 0px 17px 2px wheat;
    border-radius: 50%;
  }
`;

const HeroImg = styled.img<{
  position: number[];
  transition: boolean;
  topImage: boolean;
}>`
  width: 100vw;
  height: auto;
  max-height: 67.5rem;
  object-fit: cover;
  transition: ${(props) => (props.transition ? "clip-path 1000ms" : "none")};

  ${(props) =>
    props.topImage ? TopBanner(props.position, props.transition) : ""};
`;

const TopBanner = (position: number[], transition: boolean) => `
  position: absolute;
  bottom: 0;
  left: 0;
  clip-path: ${`circle(${transition ? "100%" : "10%"} at ${position[0]}% ${
    position[1]
  }%)`};
`;

const HeroBanner = () => {
  const isDarkMode = new Date().getHours() <= 5 || new Date().getHours() >= 18;

  const ref = useRef<any>(null);
  const nightBannerRef = useRef<any>(null);

  const [bannerWidth, setBannerWidth] = useState(0);
  const [bannerHeight, setBannerHeight] = useState(0);

  const [bottomBanner, setBottomBanner] = useState(
    isDarkMode ? heroNightBanner : heroDayBanner
  );

  const [cursorPosition, setCursorPosition] = useState([0, 0]);
  const [transition, setTransition] = useState(false);

  const handleMouseMove = (event: any) => {
    const newPosition = [event.pageX, event.pageY];
    setCursorPosition(newPosition);
  };

  const handleBannerClick = () => {
    setTransition(true);

    const timer = setTimeout(() => {
      setBottomBanner(
        bottomBanner === heroNightBanner ? heroDayBanner : heroNightBanner
      );
      setTransition(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  };

  useEffect(() => {
    if (bottomBanner === heroDayBanner) {
      return;
    }

    const fireflies = 25;
    const container = nightBannerRef.current;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const createFirefly = () => {
      const firefly = document.createElement("div");
      firefly.classList.add("firefly");
      firefly.style.left = Math.random() * containerWidth + "px";
      firefly.style.top = Math.random() * containerHeight + "px";
      container.appendChild(firefly);
      animateFirefly(firefly);
    };

    const animateFirefly = (elm: any) => {
      const duration = Math.random() * 5 + 5;
      const fadeDuration = 0.25;
      const delay = Math.random() * 2 + 1;

      const animate = () => {
        elm.style.opacity = Math.random() * 0.75 + 0.25;
        const newX = Math.random() * containerWidth + "px";
        const newY = Math.random() * containerHeight + "px";
        elm.style.transition = `all ${duration}s linear`;
        elm.style.left = newX;
        elm.style.top = newY;
        setTimeout(() => {
          elm.style.transition = `opacity ${fadeDuration}s linear`;
          elm.style.opacity = "0";
          setTimeout(() => {
            elm.style.opacity = "1";
            setTimeout(animate, delay * 100);
          }, fadeDuration * 100);
        }, duration * 500);
      };

      setTimeout(animate, delay * 100);
    };

    for (let i = 0; i < fireflies; i++) {
      createFirefly();
    }

    return () => {
      const elements = container.getElementsByClassName("firefly");
      while (elements.length > 0) {
        if (elements[0].parentNode) {
          elements[0].parentNode.removeChild(elements[0]);
        }
      }
    };
  }, [bottomBanner]);

  useEffect(() => {
    setBannerWidth(ref.current ? ref.current.offsetWidth : 0);
    setBannerHeight(ref.current ? ref.current.offsetHeight : 0);
  }, []);

  return (
    <Container
      ref={ref}
      onMouseMove={(event) => handleMouseMove(event)}
      onClick={handleBannerClick}
    >
      <Navbar mode={bottomBanner === heroNightBanner ? "dark" : "light"} />
      <HeroImg
        src={heroDayBanner}
        position={[
          (cursorPosition[0] / bannerWidth) * 100,
          (cursorPosition[1] / bannerHeight) * 100,
        ]}
        transition={transition}
        topImage={bottomBanner === heroNightBanner}
      />
      <div ref={nightBannerRef}>
        <HeroImg
          src={heroNightBanner}
          position={[
            (cursorPosition[0] / bannerWidth) * 100,
            (cursorPosition[1] / bannerHeight) * 100,
          ]}
          transition={transition}
          topImage={bottomBanner === heroDayBanner}
        />
      </div>
    </Container>
  );
};
export default HeroBanner;
