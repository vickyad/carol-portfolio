import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../content/projects';
import Navbar from '../../components/Navbar';
import Breadcrumbs from '../../components/Breadcrumbs';
import styled from 'styled-components';
import Presentation from './Presentation';
import Briefing from './Briefing';
import StyleGuide from './StyleGuide';
import DesignApproach from './DesignApproach';
import SiteMap from './SiteMap';
import Prototypes from './Prototypes';
import RelatedProjects from './RelatedProjects';

const Banner = styled.img`
  width: 100vw;
  max-height: 46.875rem;
  object-fit: cover;
`;
const Content = styled.div`
  padding: 2.5rem 5rem 12.5rem;

  @media (min-width: 1550px) {
    padding: 2.5rem 6.25rem 12.5rem;
  }

  @media (min-width: 1900px) {
    padding: 2.5rem 12.5rem 12.5rem;
  }
`;

const Image = styled.img`
  width: -webkit-fill-available;
`;

const ProjectDetails = () => {
  const params = useParams();
  const [pageContent, setPageContent] = useState<any>(null);

  useEffect(() => {
    const project = projects.find(
      (project) => project.id === params.projectName
    );
    setPageContent(project);
  }, []);

  return (
    <>
      {pageContent && (
        <div>
          <Navbar type="secondary" />
          <Banner src={pageContent.banner} />
          <Content>
            <Breadcrumbs path={pageContent.breadcrumb} />
            <Presentation
              title={pageContent.title}
              subtitle={pageContent.subtitle}
              description={pageContent.description}
            />
            <Briefing
              briefing={pageContent.briefing}
              audience={pageContent.audience}
              brandBeliefs={pageContent.brandBeliefs}
              brandPersonality={pageContent.brandPersonality}
            />
            <Image src={pageContent.tabletImg} />
            <StyleGuide
              pageId={pageContent.id}
              description={pageContent.styleGuideDescription}
              fontsUsed={pageContent.typography}
              typographyDescription={pageContent.typographyDescription}
              colorPalette={pageContent.colorPalette}
              colorPaletteDescription={pageContent.colorPaletteDescription}
              uiComponentsDescription={pageContent.uiComponentsDescription}
            />
            <DesignApproach designApproach={pageContent.designApproach} />
            <SiteMap
              description={pageContent.siteMapDescription}
              siteMapImg={pageContent.siteMapImg}
            />
            <Prototypes prototypes={pageContent.prototypes} />
            <RelatedProjects projectId={pageContent.id} />
          </Content>
        </div>
      )}
    </>
  );
};
export default ProjectDetails;
