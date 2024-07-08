import DeerPark from "./DeerPark";
import PolandSprings from "./PolandSprings";
import SousaAdvocacia from "./SousaAdvocacia";

interface UIComponentsProps {
  type: "deer-park" | "poland-spring" | "sousa-advocacia" | string;
}

const UIComponents = ({ type }: UIComponentsProps) => {
  const getSvg = () => {
    switch (type) {
      case "deer-park":
        return <DeerPark />;
      case "poland-springs":
        return <PolandSprings />;
      case "sousa-advocacia":
        return <SousaAdvocacia />;
      default:
        <></>;
    }
  };
  return <>{getSvg()}</>;
};
export default UIComponents;
