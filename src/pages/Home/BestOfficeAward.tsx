import Button from "../../components/Button";
import bestOfficeAwardBanner from "../../assets/bestofficeaward.png";
import styled from "styled-components";
import Typography from "../../components/Typography";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: -5.406rem;
  gap: 11%;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 0.5rem 0;
`;

const BannerImg = styled.img`
  width: 39.5rem;
`;

const BestOfficeAward = () => {
  return (
    <Container id="awards_section">
      <InnerContainer>
        <Typography size="6xl" variant="primary">
          Winner of the Best Digital Office Award 2023, preferred by ADVBOX
          company.
        </Typography>
        <Typography>
          Collaborating closely with the talented developer, Ygor Combi, we
          successfully created two exceptional websites that recently earned the
          prestigious recognition of being named the best digital websites by
          ADVBOX, a leading company in the industry. This achievement not only
          highlights the seamless synergy between design and development but
          also underscores our commitment to delivering cutting-edge and
          award-winning digital solutions. We take pride in our collaborative
          efforts and look forward to pushing the boundaries of innovation in
          future projects.
        </Typography>
        <Button
          href="https://bluestudioexpress.estadao.com.br/conteudo/2023/04/05/ganhadores-do-premio-melhores-escritorios-digitais-de-2023/"
          variant="secondary"
          target="_blank"
        >
          READ MORE
        </Button>
      </InnerContainer>
      <BannerImg src={bestOfficeAwardBanner} />
    </Container>
  );
};
export default BestOfficeAward;
