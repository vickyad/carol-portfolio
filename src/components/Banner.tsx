import styled, { keyframes } from "styled-components";
import Icon from "./Icon";

const Inner = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #e05b68;
  height: 6.25rem;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  transform: translateY(-50%);
`;

const Text = styled.p`
  font-family: Cooper, Arial, serif;
  text-shadow: 2px 0 #5e262b, -2px 0 #5e262b, 0 2px #5e262b, 0 -2px #5e262b,
    1px 1px #5e262b, -1px -1px #5e262b, 1px -1px #5e262b, -1px 1px #5e262b,
    5px 5px 0px #5e262b;
  color: #fddc86;
  font-size: 2rem;
  white-space: nowrap;
`;

const swipe = keyframes`
  0% {
    transform: translate(0);
  }

  100% {
    transform: translate(-100%);
  }
`;

const Section = styled.div`
  display: flex;
  gap: 1rem;
  animation: ${swipe} 6000ms linear infinite;
  margin-right: 1rem;
`;

interface BannerProps {
  texts: string[];
}

const Banner = ({ texts }: BannerProps) => {
  return (
    <Inner>
      <Wrapper>
        <Section>
          {texts.map((text) => (
            <>
              <Text>{text}</Text>
              <Icon type="star" />
            </>
          ))}
        </Section>
        <Section>
          {texts.map((text) => (
            <>
              <Text>{text}</Text>
              <Icon type="star" />
            </>
          ))}
        </Section>
        <Section>
          {texts.map((text) => (
            <>
              <Text>{text}</Text>
              <Icon type="star" />
            </>
          ))}
        </Section>
        <Section>
          {texts.map((text) => (
            <>
              <Text>{text}</Text>
              <Icon type="star" />
            </>
          ))}
        </Section>
      </Wrapper>
    </Inner>
  );
};
export default Banner;
