import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../content/projects";
import Navbar from "../../components/Navbar";
import Breadcrumbs from "../../components/Breadcrumbs";
import styled from "styled-components";
import Presentation from "./Presentation";
import Briefing from "./Briefing";
import StyleGuide from "./StyleGuide";

const Content = styled.div`
  padding: 2.5rem 10% 12.5rem;
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
          <Navbar />
          <img src={pageContent.banner} />
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
            <img src={pageContent.tabletImg} />
            <StyleGuide
              description={pageContent.styleGuideDescription}
              fontsUsed={pageContent.typography}
              typographyDescription={pageContent.typographyDescription}
              colorPalette={pageContent.colorPalette}
              colorPaletteDescription={pageContent.colorPaletteDescription}
              uiComponentsDescription={pageContent.uiComponentsDescription}
            />
          </Content>
        </div>
      )}
    </>
  );
};
export default ProjectDetails;
