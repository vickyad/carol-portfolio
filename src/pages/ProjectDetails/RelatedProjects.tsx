import styled from "styled-components";
import polandSpringsBanner from "../../assets/poland-springs.png";
import sousaAdvocaciaBanner from "../../assets/sousa-advocacia.png";
import deerParkBanner from "../../assets/deer-park.png";
import Button from "../../components/Button";
import Typography from "../../components/Typography";

const Container = styled.section`
  margin-top: 12.5rem;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8%;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 3.75rem;
`;

const ProjectImg = styled.img`
  width: -webkit-fill-available;
`;

const projects = [
  {
    id: "poland-springs",
    src: polandSpringsBanner,
    name: "Poland Springs Website",
    url: "/projects/poland-springs",
  },
  {
    id: "sousa-advocacia",
    src: sousaAdvocaciaBanner,
    name: "Sousa Advocacia Website",
    url: "/projects/sousa-advocacia",
  },
  {
    id: "deer-park",
    src: deerParkBanner,
    name: "Deer Park Website",
    url: "/projects/deer-park",
  },
];

interface RelatedProjectsProps {
  projectId: string;
}

const RelatedProjects = ({ projectId }: RelatedProjectsProps) => {
  return (
    <Container>
      <Typography variant="primary" size="6xl">
        Related Projects
      </Typography>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <>
            {projectId !== project.id && (
              <ProjectContainer key={`project_${index}`}>
                <ProjectImg src={project.src} />
                <Typography size="4xl" weight="bold">
                  {project.name}
                </Typography>
                <Button href={project.url}>READ MORE</Button>
              </ProjectContainer>
            )}
          </>
        ))}
      </ProjectsContainer>
    </Container>
  );
};
export default RelatedProjects;
