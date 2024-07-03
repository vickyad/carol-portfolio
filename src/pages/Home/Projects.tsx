import styled from "styled-components";
import polandSpringsBanner from "../../assets/poland-springs.png";
import sousaAdvocaciaBanner from "../../assets/sousa-advocacia.png";
import deerParkBanner from "../../assets/deer-park.png";
import Button from "../../components/Button";

const Container = styled.section`
  margin: 15.438rem 0 9rem;
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

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8%;
`;

const TransparentLink = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ProjectImg = styled.img`
  width: -webkit-fill-available;
`;

const ProjectName = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const projects = [
  { src: polandSpringsBanner, name: "Poland Springs Website", url: "" },
  { src: sousaAdvocaciaBanner, name: "Sousa Advocacia Website", url: "" },
  { src: deerParkBanner, name: "Deer Park Website", url: "" },
];

const Projects = () => {
  return (
    <Container>
      <TextContainer>
        <h2>Check out some of my work here!</h2>
        <p>
          I've curated some of my best work. You can explore them using the tabs
          below.
        </p>
      </TextContainer>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectContainer>
            <ProjectImg src={project.src} />
            <ProjectName>{project.name}</ProjectName>
            <Button handleClick={() => {}}>
              <TransparentLink href={project.url}>READ MORE</TransparentLink>
            </Button>
          </ProjectContainer>
        ))}
      </ProjectsContainer>
    </Container>
  );
};
export default Projects;
