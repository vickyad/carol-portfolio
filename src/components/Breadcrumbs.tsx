import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  font-size: 1.125rem;
`;

const PathLink = styled(Link)`
  text-decoration: none;
  font-size: 1.125rem;
`;

const CurrentPage = styled.p`
  font-weight: bold;
`;

type PathType = { label: string; link: string };

interface BreadcrumbsProps {
  path: PathType[];
}

const Breadcrumbs = ({ path }: BreadcrumbsProps) => {
  return (
    <Container>
      {path.map((item, index) => (
        <Container key={`breadcrumb_item_${index}`}>
          {index < path.length - 1 ? (
            <>
              <PathLink to={item.link}>{item.label}</PathLink> {">"}
            </>
          ) : (
            <CurrentPage>{item.label}</CurrentPage>
          )}
        </Container>
      ))}
    </Container>
  );
};
export default Breadcrumbs;
