import styled from "styled-components";
import sealImg from "../../assets/seal.png";
import { testimonials } from "../../content/testimonials";
import Typography from "../../components/Typography";

const Container = styled.section`
  margin: 8.875rem 0;
`;

const TextContainer = styled.div`
  width: 37%;
  max-width: 35.125rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 0 auto 6.25rem;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2%;
`;

const TestimonialContainer = styled.div<{ color: string }>`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1.875rem 0.938rem;
  background-color: ${(props) => props.color};
  box-shadow: 10px 10px 0px 0px #5e262b;
  border-radius: 1.25rem;
  padding: 6.313rem 5.5rem 5.625rem;
  max-width: 30rem;
`;

const Quotation = styled.span`
  position: absolute;
  top: -7rem;
  left: 2rem;
  font-family: Cooper, Arial, serif;
  text-shadow: 2px 0 #5e262b, -2px 0 #5e262b, 0 2px #5e262b, 0 -2px #5e262b,
    1px 1px #5e262b, -1px -1px #5e262b, 1px -1px #5e262b, -1px 1px #5e262b,
    5px 5px 0px #5e262b;
  color: #fddc86;
  font-size: 18.75rem;
`;

const AuthorImgContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const SealImg = styled.img`
  width: 7.063rem;
`;

const AuthorImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5.125rem;
  height: 6.25rem;
  object-fit: cover;
`;

const Testimonials = () => {
  return (
    <Container>
      <TextContainer>
        <Typography variant="primary" size="6xl" textAlign="center">
          Testimonials
        </Typography>
        <Typography textAlign="center">
          Here's feedback on my performance from clients or colleagues.
        </Typography>
      </TextContainer>
      <TestimonialsContainer>
        {testimonials.map((testimonial, index) => (
          <TestimonialContainer
            color={testimonial.cardColor}
            key={`testimonial_${index}`}
          >
            <Quotation>“</Quotation>
            <Typography style={{ gridColumnStart: "span 3" }}>
              {testimonial.text}
            </Typography>
            <AuthorImgContainer>
              <AuthorImg src={testimonial.authorSrc} />
              <SealImg src={sealImg} />
            </AuthorImgContainer>
            <div>
              <Typography size="lg" weight="bold">
                {testimonial.authorName}
              </Typography>
              <Typography size="base">{testimonial.authorPosition}</Typography>
            </div>
          </TestimonialContainer>
        ))}
      </TestimonialsContainer>
    </Container>
  );
};
export default Testimonials;
