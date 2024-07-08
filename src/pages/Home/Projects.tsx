import styled from "styled-components";
import polandSpringsBanner from "../../assets/poland-springs.png";
import sousaAdvocaciaBanner from "../../assets/sousa-advocacia.png";
import deerParkBanner from "../../assets/deer-park.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
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

const TransparentLink = styled(Link)`
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
        <h2>Check out some of my work here!</h2>
        <p>
          I've curated some of my best work. You can explore them using the tabs
          below.
        </p>
      </TextContainer>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectContainer key={`project_${index}`}>
            <ProjectImg src={project.src} />
            <Typography size="4xl" weight="bold">
              {project.name}
            </Typography>
            <Button handleClick={() => {}}>
              <TransparentLink to={project.url}>READ MORE</TransparentLink>
            </Button>
          </ProjectContainer>
        ))}
      </ProjectsContainer>
    </Container>
  );
};
export default Projects;
