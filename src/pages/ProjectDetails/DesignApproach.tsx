import styled from "styled-components";
import Box from "../../components/Box";
import Typography from "../../components/Typography";

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`;

interface DesignApproachProps {
  designApproach: { title: string; text: string }[];
}

const DesignApproach = ({ designApproach }: DesignApproachProps) => {
  return (
    <section>
      <Typography
        size="3xl"
        variant="tertiary"
        textAlign="center"
        style={{ margin: "3.75rem 0 2.5rem" }}
      >
        DESIGN APPROACH
      </Typography>
      <BoxContainer>
        {designApproach.map((item) => (
          <Box
            title={item.title}
            text={[item.text]}
            size="xl"
            color="#B7D9D4"
          />
        ))}
      </BoxContainer>
    </section>
  );
};
export default DesignApproach;
