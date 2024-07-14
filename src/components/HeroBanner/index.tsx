import styled, { keyframes } from "styled-components";
import heroDayBanner from "../../assets/hero_day.png";
import heroNightBanner from "../../assets/hero_night.png";
import { useEffect, useRef, useState } from "react";

const expand = keyframes<{ position: number[] }>`
  0% {
    clip-path: ${(props) =>
      `circle(10% at ${props.position[0]}% ${props.position[1]}%)`};
  }

  100% {
    clip-path: ${(props) =>
      `circle(100% at ${props.position[0]}% ${props.position[1]}%)`};
  }
`;

const HeroImg = styled.img`
  width: 100vw;
  height: auto;
  max-height: 67.5rem;
  object-fit: cover;
`;

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

const TopImg = styled(HeroImg)<{ position: number[]; transition: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  clip-path: ${(props) =>
    `circle(10% at ${props.position[0]}% ${props.position[1]}%)`};
  animation: ${(props) => (props.transition ? expand : "none")} 1000ms ease-out;
`;

const HeroBanner = () => {
  const ref = useRef<any>(null);
  const isDarkMode = new Date().getHours() <= 5 || new Date().getHours() >= 18;
  const [bannerWidth, setBannerWidth] = useState(0);
  const [bannerHeight, setBannerHeight] = useState(0);

  const [bottomBanner, setBottomBanner] = useState(
    isDarkMode ? heroNightBanner : heroDayBanner
  );
  const [topBanner, setTopBanner] = useState(
    !isDarkMode ? heroNightBanner : heroDayBanner
  );

  const [cursorPosition, setCursorPosition] = useState([0, 0]);
  const [transition, setTransition] = useState(false);

  const handleMouseMove = (event: any) => {
    const newPosition = [event.clientX, event.clientY];
    setCursorPosition(newPosition);
  };

  const handleBannerClick = () => {
    setTransition(true);

    const timer = setTimeout(() => {
      const newTopBanner = bottomBanner;
      setBottomBanner(topBanner);
      setTopBanner(newTopBanner);
      setTransition(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  };

  useEffect(() => {
    if (bottomBanner !== heroNightBanner) return;

    const fireflies = 25;
    const container = ref.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

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
            setTimeout(animate, delay * 1000);
          }, fadeDuration * 1000);
        }, duration * 1000);
      };

      setTimeout(animate, delay * 1000);
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
  }, [ref.current]);

  return (
    <Container
      ref={ref}
      onMouseMove={(event) => handleMouseMove(event)}
      onClick={handleBannerClick}
    >
      <TopImg
        src={topBanner}
        position={[
          (cursorPosition[0] / bannerWidth) * 100,
          (cursorPosition[1] / bannerHeight) * 100,
        ]}
        transition={transition}
      />
      <HeroImg src={bottomBanner} />
    </Container>
  );
};
export default HeroBanner;
