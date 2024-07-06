import styled from 'styled-components';
import polandSpringsBanner from '../../assets/poland-springs.png';
import sousaAdvocaciaBanner from '../../assets/sousa-advocacia.png';
import deerParkBanner from '../../assets/deer-park.png';
import Button from '../../components/Button';

const Container = styled.section`
  margin-top: 12.5rem;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  {
    id: 'poland-springs',
    src: polandSpringsBanner,
    name: 'Poland Springs Website',
    url: '/projects/poland-springs',
  },
  {
    id: 'sousa-advocacia',
    src: sousaAdvocaciaBanner,
    name: 'Sousa Advocacia Website',
    url: '/projects/sousa-advocacia',
  },
  {
    id: 'deer-park',
    src: deerParkBanner,
    name: 'Deer Park Website',
    url: '/projects/deer-park',
  },
];

interface RelatedProjectsProps {
  projectId: string;
}

const RelatedProjects = ({ projectId }: RelatedProjectsProps) => {
  return (
    <Container>
      <h2>Related Projects</h2>

      <ProjectsContainer>
        {projects.map((project, index) => (
          <>
            {projectId !== project.id && (
              <ProjectContainer key={`project_${index}`}>
                <ProjectImg src={project.src} />
                <ProjectName>{project.name}</ProjectName>
                <Button handleClick={() => {}}>
                  <TransparentLink href={project.url}>
                    READ MORE
                  </TransparentLink>
                </Button>
              </ProjectContainer>
            )}
          </>
        ))}
      </ProjectsContainer>
    </Container>
  );
};
export default RelatedProjects;
