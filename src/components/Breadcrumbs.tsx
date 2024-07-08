import { Link } from "react-router-dom";
import styled from "styled-components";
import Typography from "./Typography";
import { PathType } from "../types/types";

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
            <Typography weight="bold">{item.label}</Typography>
          )}
        </Container>
      ))}
    </Container>
  );
};
export default Breadcrumbs;
