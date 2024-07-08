import styled from "styled-components";
import Typography from "../../components/Typography";

const Container = styled.div`
  margin: 12.5rem 0;
`;

const TitleContainer = styled.div`
  width: 37%;
  max-width: 35.125rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 0 auto 6.25rem;
`;

const Image = styled.img`
  width: -webkit-fill-available;
`;

interface SiteMapProps {
  description: string;
  siteMapImg: string;
}

const SiteMap = ({ description, siteMapImg }: SiteMapProps) => {
  return (
    <Container>
      <TitleContainer>
        <Typography variant="primary" size="6xl">
          Site Map
        </Typography>
        <Typography>{description}</Typography>
      </TitleContainer>
      <Image src={siteMapImg} />
    </Container>
  );
};
export default SiteMap;
