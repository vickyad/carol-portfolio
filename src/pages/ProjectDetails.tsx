import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);

  return <div>This is just a test for routing</div>;
};
export default ProjectDetails;
