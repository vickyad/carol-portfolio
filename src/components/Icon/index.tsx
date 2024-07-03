import GraphicDesignIcon from "./GraphicDesignIcon";
import IllustrationIcon from "./IllustrationIcon";
import InstagramIcon from "./InstagramIcon";
import LinkedinIcon from "./LinkedinIcon";
import UIDesignIcon from "./UIDesignIcon";
import UXDesignIcon from "./UXDesignIcon";

interface IconProps {
  type:
    | "graphic-design"
    | "illustration"
    | "ui-design"
    | "ux-design"
    | "instagram"
    | "linkedin"
    | string;
  size?: "sm" | "md";
}

const Icon = ({ type, size }: IconProps) => {
  const getIcon = () => {
    switch (type) {
      case "graphic-design":
        return <GraphicDesignIcon />;
      case "illustration":
        return <IllustrationIcon />;
      case "ui-design":
        return <UIDesignIcon />;
      case "ux-design":
        return <UXDesignIcon />;
      case "linkedin":
        return <LinkedinIcon size={size} />;
      case "instagram":
        return <InstagramIcon size={size} />;
      default:
        <></>;
    }
  };
  return <>{getIcon()}</>;
};
export default Icon;
