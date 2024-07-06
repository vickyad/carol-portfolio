import styled from 'styled-components';

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
        <h2>Site Map</h2>
        <p>{description}</p>
      </TitleContainer>
      <Image src={siteMapImg} />
    </Container>
  );
};
export default SiteMap;
