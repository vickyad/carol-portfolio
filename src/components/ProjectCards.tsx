import styled from "styled-components";
import polandSpringsBanner from "../assets/poland-springs.png";
import sousaAdvocaciaBanner from "../assets/sousa-advocacia.png";
import deerParkBanner from "../assets/deer-park.png";
import Button from "./Button";
import Typography from "./Typography";

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

const ProjectsContainer = styled.div<{ relatedProjects: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.relatedProjects ? "start" : "space-between"};
  gap: 8%;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 21.875rem;
`;

const ProjectImg = styled.img`
  width: 21.875rem;
  height: 30rem;
  object-fit: cover;
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

interface ProjectCardsProps {
  title: string;
  description?: string;
  relatedProjects?: boolean;
  projectId?: string;
}

const ProjectCards = ({
  title,
  description,
  relatedProjects = false,
  projectId,
}: ProjectCardsProps) => {
  const ProjectCard = (
    project: {
      id: string;
      src: string;
      name: string;
      url: string;
    },
    index: number
  ) => (
    <ProjectContainer key={`project_${index}`}>
      <ProjectImg src={project.src} />
      <Typography size="4xl" weight="bold">
        {project.name}
      </Typography>
      <Button href={project.url} style={{ marginTop: "auto" }}>
        READ MORE
      </Button>
    </ProjectContainer>
  );

  return (
    <Container>
      <TextContainer>
        <Typography variant="primary" size="6xl">
          {title}
        </Typography>
        {description && <Typography>{description}</Typography>}
      </TextContainer>
      <ProjectsContainer relatedProjects={relatedProjects}>
        {projects.map((project, index) =>
          relatedProjects
            ? projectId !== project.id && ProjectCard(project, index)
            : ProjectCard(project, index)
        )}
      </ProjectsContainer>
    </Container>
  );
};
export default ProjectCards;
