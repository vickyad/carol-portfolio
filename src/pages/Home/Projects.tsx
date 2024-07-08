import styled from "styled-components";
import polandSpringsBanner from "../../assets/poland-springs.png";
import sousaAdvocaciaBanner from "../../assets/sousa-advocacia.png";
import deerParkBanner from "../../assets/deer-park.png";
import Button from "../../components/Button";
import Typography from "../../components/Typography";

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

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ProjectImg = styled.img`
  width: -webkit-fill-available;
`;

const projects = [
  {
    src: polandSpringsBanner,
    name: "Poland Springs Website",
    url: "/projects/poland-springs",
  },
  {
    src: sousaAdvocaciaBanner,
    name: "Sousa Advocacia Website",
    url: "/projects/sousa-advocacia",
  },
  {
    src: deerParkBanner,
    name: "Deer Park Website",
    url: "/projects/deer-park",
  },
];

const Projects = () => {
  return (
    <Container>
      <TextContainer>
        <Typography variant="primary" size="6xl">
          Check out some of my work here!
        </Typography>
        <Typography>
          I've curated some of my best work. You can explore them using the tabs
          below.
        </Typography>
      </TextContainer>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectContainer key={`project_${index}`}>
            <ProjectImg src={project.src} />
            <Typography size="4xl" weight="bold">
              {project.name}
            </Typography>
            <Button href={project.url}>READ MORE</Button>
          </ProjectContainer>
        ))}
      </ProjectsContainer>
    </Container>
  );
};
export default Projects;
