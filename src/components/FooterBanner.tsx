import styled, { keyframes } from "styled-components";
import Icon from "./Icon";
import Typography from "./Typography";

const swipe = keyframes`
  0% {
    transform: translate(0);
  }

  100% {
    transform: translate(-100%);
  }
`;

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

const Section = styled.div`
  display: flex;
  gap: 1rem;
  animation: ${swipe} 7000ms linear infinite;
  margin-right: 1rem;
`;

interface BannerProps {
  texts: string[];
}

const FooterBanner = ({ texts }: BannerProps) => {
  return (
    <Inner>
      <Wrapper>
        <Section>
          {texts.map((text, index) => (
            <>
              <Typography
                key={`text_1_${index}`}
                size="4xl"
                variant="primary"
                style={{ whiteSpace: "nowrap" }}
              >
                {text}
              </Typography>
              <Icon type="star" key={`icon_1_${index}`} />
            </>
          ))}
        </Section>
        <Section>
          {texts.map((text, index) => (
            <>
              <Typography
                key={`text_2_${index}`}
                size="4xl"
                variant="primary"
                style={{ whiteSpace: "nowrap" }}
              >
                {text}
              </Typography>
              <Icon type="star" key={`icon_2_${index}`} />
            </>
          ))}
        </Section>
        <Section>
          {texts.map((text, index) => (
            <>
              <Typography
                key={`text_3_${index}`}
                size="4xl"
                variant="primary"
                style={{ whiteSpace: "nowrap" }}
              >
                {text}
              </Typography>
              <Icon type="star" key={`icon_3_${index}`} />
            </>
          ))}
        </Section>
        <Section>
          {texts.map((text, index) => (
            <>
              <Typography
                key={`text_4_${index}`}
                size="4xl"
                variant="primary"
                style={{ whiteSpace: "nowrap" }}
              >
                {text}
              </Typography>
              <Icon type="star" key={`icon_4_${index}`} />
            </>
          ))}
        </Section>
      </Wrapper>
    </Inner>
  );
};
export default FooterBanner;
