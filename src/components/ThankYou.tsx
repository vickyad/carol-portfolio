import styled from "styled-components";
import melImg from "../assets/Mel.png";
import charlizeImg from "../assets/Charlize.png";
import Typography from "./Typography";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.188rem;
  margin: 6.25rem auto 0;
`;

const TextContainer = styled.div`
  width: 28%;
`;

const ThankYou = () => {
  return (
    <Container>
      <img src={melImg} />
      <TextContainer>
        <Typography size="6xl" variant="primary" textAlign="center">
          Thank You for Watching
        </Typography>
      </TextContainer>
      <img src={charlizeImg} />
    </Container>
  );
};
export default ThankYou;
