import styled from 'styled-components';
import melImg from '../assets/Mel.png';
import charlizeImg from '../assets/Charlize.png';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.188rem;
  width: 50%;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  font-family: Cooper, Arial, serif;
  text-shadow: 2px 0 #5e262b, -2px 0 #5e262b, 0 2px #5e262b, 0 -2px #5e262b,
    1px 1px #5e262b, -1px -1px #5e262b, 1px -1px #5e262b, -1px 1px #5e262b,
    5px 5px 0px #5e262b;
  color: #fddc86;
  font-size: 3rem;
  line-height: 4rem;
  text-align: center;
`;

const ThankYou = () => {
  return (
    <Container>
      <img src={melImg} />
      <Paragraph>Thank You for Watching</Paragraph>
      <img src={charlizeImg} />
    </Container>
  );
};
export default ThankYou;
