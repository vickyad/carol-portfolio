import styled from "styled-components";
import sealImg from "../../assets/seal.png";
import eduImg from "../../assets/edu.png";
import isaImg from "../../assets/isabella.png";

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

const TestimonialText = styled.p`
  grid-column-start: span 3;
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

const AuthorName = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;

const AuthorPosition = styled.p`
  font-size: 0.875rem;
`;

const testimonials = [
  {
    text: "A Carol não apenas aproveita cada oportunidade, mas também entrega resultados impressionantes. Mal posso esperar para ter a chance de trabalhar novamente com essa excelente profissional!",
    authorSrc: isaImg,
    authorName: "Isabella Salles",
    authorPosition: "Senior UX / UI",
    cardColor: "#FDDC86",
  },
  {
    text: "O trabalho da Carol é excepcional, com uma abordagem única e inovadora. Sua criatividade e atenção aos detalhes elevam cada projeto. Altamente recomendada para quem busca qualidade e originalidade. #DesignExcepcional",
    authorSrc: eduImg,
    authorName: "Eduardo Koetz",
    authorPosition: "CEO da ADVBOX",
    cardColor: "#B7D9D4",
  },
  {
    text: "A Carol não apenas aproveita cada oportunidade, mas também entrega resultados impressionantes. Mal posso esperar para ter a chance de trabalhar novamente com essa excelente profissional!",
    authorSrc: isaImg,
    authorName: "Isabella Salles",
    authorPosition: "Senior UX / UI",
    cardColor: "#E4D6F5",
  },
];

const Testimonials = () => {
  return (
    <Container>
      <TextContainer>
        <h2>Testimonials</h2>
        <p>Here's feedback on my performance from clients or colleagues.</p>
      </TextContainer>
      <TestimonialsContainer>
        {testimonials.map((testimonial) => (
          <TestimonialContainer color={testimonial.cardColor}>
            <Quotation>“</Quotation>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <AuthorImgContainer>
              <AuthorImg src={testimonial.authorSrc} />
              <SealImg src={sealImg} />
            </AuthorImgContainer>
            <div>
              <AuthorName>{testimonial.authorName}</AuthorName>
              <AuthorPosition>{testimonial.authorPosition}</AuthorPosition>
            </div>
          </TestimonialContainer>
        ))}
      </TestimonialsContainer>
    </Container>
  );
};
export default Testimonials;
